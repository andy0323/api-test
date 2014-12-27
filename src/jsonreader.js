// var fs = require('fs');
var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
var console = require('logge');

function read_json(file, cb_succ, cb_fail) {
	// function parseJson (file, er, content, cb_succ, cb_fail) {
	//   try {
	//     d = JSON.parse((content))
	// 		d.file_name = file.split('/').pop();;
	// 		d.file_path = file;
	// 		cb_succ(d);
	//   } catch (er) {
	// 		cb_fail();
	//   }
	// }
	//
	//   fs.readFileSync(file, "utf8", function (err, content) {
	//     parseJson(file, err, content, cb_succ, cb_fail)
	//   })
	//
		
	
	return fs.readFileAsync(file,{encoding: 'utf-8'}).then(function(str){
		// json 不支持属性里有冒号的情况
		// 我其实想用yaml的，暂时先这样
		var a = str.replace(/\":/g,'@@');
		a = a.replace(/:/g,'__');
		a = a.replace(/@@/g,'":');
		var _new_json_string = JSON.parse(JSON.stringify(a));
		var obj = JSON.parse(_new_json_string);
		// obj.url = decode_url(obj.url);
		return Promise.resolve(obj);
	});
}

module.exports = read_json