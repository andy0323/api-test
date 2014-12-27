var fs = require("fs");
var request = require('request');
var Promise = require("bluebird");
Promise.promisifyAll(require("request"));

var console = require('logge');

function decode_url(url){
	url = url.replace(/__/g,':');
	return url;
}

function get_url(jsonObj){
	var url = jsonObj['url'];
	return decode_url(url);
}
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
		
		case 'upload' :
			return uploadRequest(jsonObj, completeCallback);
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
	return request.getAsync({
		url : get_url(jsonObj),
		form: jsonObj.params
	}).spread(function(httpResponse, body){
		var err = null;
		if(httpResponse.statusCode != 200){
			err = new Error("请求失败");
		}
		
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
	return request.postAsync({
		url : get_url(jsonObj),
		form: jsonObj.params
	}).spread(function(httpResponse, body){
		var err = null;
		if(httpResponse.statusCode != 200){
			err = new Error("请求失败");
		}
		
    return completeCallbackAgent(jsonObj, err, httpResponse, body, completeCallback);
	}).error(function(err){
		console.error("unable to get, because: ", err.message);
		var body = null;
		var httpResponse = null;
	   //handle error here
    return completeCallbackAgent(jsonObj, err, httpResponse, body, completeCallback);
	})
}


function uploadRequest(jsonObj, completeCallback){
	var up_file = jsonObj.pwd + '/file/' + jsonObj['params']['filename'];
	
	var formData = {
	  // Pass a simple key-value pair
	  name: 'pic',
	  // Pass multiple values /w an Array
	  filename: fs.createReadStream(up_file)
	};
	return request.postAsync({
		url : get_url(jsonObj),
		formData: formData
	}).spread(function(httpResponse, body){
		var err = null;
		if(httpResponse.statusCode != 200){
			err = new Error("请求失败");
		}
		
		if(httpResponse.statusCode == 302){
			err = new Error("目前的测试上传地址有问题，请求失败");
			err = null;
			console.log("目前的测试上传地址有问题，请求失败");
			body = httpResponse;
		}
		
    return completeCallbackAgent(jsonObj, err, httpResponse, body, completeCallback);
	}).error(function(err){
		console.error("unable to get, because: ", err.message);
		var body = null;
		var httpResponse = null;
	   //handle error here
    return completeCallbackAgent(jsonObj, err, httpResponse, body, completeCallback);
	})
	
	
	//
	// request.post({url:'http://service.com/upload', formData: formData}, function optionalCallback(err, httpResponse, body) {
	//   if (err) {
	//     return console.error('upload failed:', err);
	//   }
	//   console.log('Upload successful!  Server responded with:', body);
	// });
	
}

/**
 *	返回格式转换
 */
function completeCallbackAgent(jsonObj, err, httpResponse, body, callback) {
	
	if (err) {
		body = null;
	}else {
		if(httpResponse.statusCode == 200){
			body = JSON.parse(body);
		}
	}

	callback(jsonObj, err, httpResponse, body);
}