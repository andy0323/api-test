var request = require('../src/apiRequest.js')
var fs = require('fs');
var Promise = require("bluebird");
var jsonreader = require('../src/jsonreader');

var req_file = "../play/request/get.req"
jsonreader(req_file).then(function (obj) {
	return request.task(obj, requestCompleteCallback)
}).then(function(jsonObj, jsonString){
	console.log("...");
	return writeHandler(jsonObj, jsonString);
}).then(function(){
	console.log("...11");
}).catch(SyntaxError, function (e) {
    console.error("file contains invalid json");
}).error(function (e) {
    console.error("unable to read file, because: ", e.message);
});
 
function requestCompleteCallback(jsonObj, resErr, httpResponse, resBody) {

	jsonObj.response = {
		result : resBody,
		err    : resErr,
		status : (resErr==null) ? true : false
	};

	var jsonString = JSON.stringify(jsonObj, null, 4);
		// writeHandler(jsonObj, jsonString)
	return Promise.resolve(jsonObj, jsonString);
}
 
 
/**
 * 写入数据
 */
function writeHandler(jsonObj, data) {
	// var resName = jsonObj.file_name.replace(/.req/, '.res');
	// var resPath = 'response/' + resName;
	
	return Promise.resolve();
}