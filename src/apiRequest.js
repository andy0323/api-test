var request = require('request');

/**
 * 开始执行请求
 */
function startTask(jsonObj, completeCallback) {

	switch(jsonObj.type) {
		case 'get' : 
			getRequest(jsonObj, completeCallback);
		break;

		case 'post' :
			postRequest(jsonObj, completeCallback);
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
	request.get(
		{
			url : jsonObj.url, 
			form: jsonObj.params
		}, 
		function(err,httpResponse,body){
			completeCallbackAgent(jsonObj, err, httpResponse, body, completeCallback);
		});
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
	console.log(1);
	callback(jsonObj, err, httpResponse, body);
}