var request = require('request');
var Promise = require("bluebird");
Promise.promisifyAll(require("request"));

/**
 * 开始执行请求
 */
function startTask(jsonObj, completeCallback) {

	switch(jsonObj.type) {
		case 'get' : 
			return getRequest(jsonObj, completeCallback);
		break;

		case 'post' :
			return postRequest(jsonObj, completeCallback);
		break;

		default:
			console.log('不支持所提供的方式');
	};	
}

exports.task = startTask;

/**
 * GET请求
 */
function getRequest(jsonObj, completeCallback) {
	//开始飞吧
	return request.getAsync({
		url : jsonObj.url, 
		form: jsonObj.params
	}).spread(function(httpResponse, body){
		var err = null;
    return completeCallbackAgent(jsonObj, err, httpResponse, body, completeCallback);
	}).error(function(err){
		console.error("unable to get, because: ", err.message);
		var body = null;
		var httpResponse = null;
	   //handle error here
    return completeCallbackAgent(jsonObj, err, httpResponse, body, completeCallback);
	})
	
	// request.get(
// 		{
// 			url : jsonObj.url,
// 			form: jsonObj.params
// 		},
// 		function(err,httpResponse,body){
// 			completeCallbackAgent(jsonObj, err, httpResponse, body, completeCallback);
// 		});
}

/**
 * POST请求
 */
function postRequest(jsonObj, completeCallback) {
	request.post(
		{
			url : jsonObj.url, 
			form: jsonObj.params
		}, 
		function(err,httpResponse,body){
			completeCallbackAgent(jsonObj, err, httpResponse, body, completeCallback);
		});
}

/**
 *	返回格式转换
 */
function completeCallbackAgent(jsonObj, err, httpResponse, body, callback) {
	
	if (err) {
		body = null;
	}else {
		body = JSON.parse(body);
	}

	callback(jsonObj, err, httpResponse, body);
}