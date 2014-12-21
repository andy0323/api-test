var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));

var shell = require('shelljs');
var Handlebars = require('handlebars');

function res_to_md(res_obj, api_md_file ,cb_succ, cb_fail) {
	var name     = res_obj.name;
	var url      = res_obj.url;
	var type     = res_obj.type;
	var params   = res_obj.params;
	var response = res_obj.response;	

	// 获取参数个数
	var paramsCount = 0;
	for(var obj in params) {
		paramsCount++;
	}

	// 设置参数介绍
	res_obj.params = '没有参数'
	if (paramsCount > 0) {
		res_obj.params = JSON.stringify(params, null, 4);
	};
	
	// 请求状态
	var success = response.status == true;

	// 状态
	res_obj.status =  success ? '请求成功' : '请求失败';
	
	// 请求标题
	res_obj.title   = success ? '响应体内容' : '错误信息';
	res_obj.content = success ? JSON.stringify(response.result, null, 4):
								JSON.stringify(response.err, null, 4);

	// 模板
	var source = shell.cat('../test/vendor/res_to_md.tpl');
	var template = Handlebars.compile(source);

	// 转换后信息
	var result = template(res_obj);

	cb_succ(result);
	createMarkdown(api_md_file ,result);
	
	return Promise.resolve(result);
}

function createMarkdown(api_md_file ,t){
	console.log(t)
	fs.appendFileSync(api_md_file, t, 'utf-8', function(err) {
		if (err) {
			return;
		};
	});
}

module.exports = res_to_md