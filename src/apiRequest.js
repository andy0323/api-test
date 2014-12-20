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
			completeCallback(jsonObj, err, httpResponse, body);
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
			completeCallback(jsonObj, err, httpResponse, body);
		});
}