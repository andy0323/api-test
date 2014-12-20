var request = require('request');

/**
 * 开始执行请求
 */
function startTask(jsonObj, completeCallback) {

	switch(type) {
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
	var url  = jsonObj.url;
	var type = jsonObj.type;
	var arg  = jsonObj.params;

	request.get(
		{
			url : URL, 
			form: argments
		}, 
		function(err,httpResponse,body){
			completeCallback(err, httpResponse, body);
		});
}

/**
 * POST请求
 */
function postRequest(jsonObj, completeCallback) {
	var url  = jsonObj.url;
	var type = jsonObj.type;
	var arg  = jsonObj.params;

	request.post(
		{
			url : URL, 
			form: argments
		}, 
		function(err,httpResponse,body){
			completeCallback(err, httpResponse, body);
		});
}