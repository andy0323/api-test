var fs = require('fs');
require('shelljs/global');
var jsonreader = require('./jsonreader');
var res_to_md = require('./res_to_md');

REQUEST_FOLDER_NAME = "/request"
RESPONSE_FOLDER_NAME = "/response"


function log(t){
	echo("[API-TEST LOG]" + t)
}


function doc_generate_with_markdown(pwd_dir, cb_succ, cb_fail) {
	// create response dir
	mkdir("-p", pwd_dir + RESPONSE_FOLDER_NAME);
	//
	_to_markdown(pwd_dir, cb_succ, cb_fail);
}

module.exports = doc_generate_with_markdown


GENERATE_MARKDOWN_FILE_NAME = "api.md"

function _to_markdown(pwd_dir, cb_succ, cb_fail){
	// -- private
	function parse_with_response_dir(path, cb_succ, cb_fail){
	  var dirList = fs.readdirSync(path);
 
	  dirList.forEach(function(item){
	    if(fs.statSync(path + '/' + item).isFile()){
			var req_file = path + '/' + item;
			markdown_processing_with_one_file(req_file, cb_succ, cb_fail);
	    }
	  });
 
	  // 子目录，暂不处理，现在是广度优先。
	  dirList.forEach(function(item){
	    if(fs.statSync(path + '/' + item).isDirectory()){
	      walk(path + '/' + item);
	    }
	  });
	}	
	
	function markdown_processing_with_one_file(req_file, cb_succ, cb_fail){
		// 解析，并把根据res生成的md内容，写到#{GENERATE_MARKDOWN_FILE_NAME}文件里
		console.log(req_file);
		
		jsonreader(req_file, function(obj){
			console.log("cb_succ")
			// start_with_req_obj(obj);
			// util.inspect(obj)
			res_to_md(obj,function(md){
				console.log(md);
				cb_succ(md);
				//succ
			},function(){
				//fail
				cb_fail();
			});
		}, function(){
			console.log("cb_fail")
		});
	}
	
	function create_api_md(){
		var api_md_file = pwd_dir + '/' + GENERATE_MARKDOWN_FILE_NAME;
		log("api_md_file = " + api_md_file);
		
		fs.exists(api_md_file, function( exists ){
			if(exists == false){
				fs.writeFile(api_md_file,'# api', function(err){
				    log('there is no api.md, now auto create it');
				});
					
				return;
			}	
		});
	}
	
	// main
	var response_dir = pwd_dir + RESPONSE_FOLDER_NAME;
	//
	create_api_md();
	//
	parse_with_response_dir(response_dir, cb_succ, cb_fail);
}


function _to_html(source_file, cb_succ, cb_fail){
	// todo
	var source_file = source_file; //'/Users/sang/workspace/github/api-test/design.md';

	//函数可以返回当前正在执行的项目路径
	var pwd = process.cwd()  

	var source_file_name = source_file;
	var file_name = source_file_name.split('/').pop();;
	var _file_name = file_name.split('.')[0];

	var dest_file_path = pwd + '/preview/' + _file_name + '.html';

	console.log('pwd=' + pwd);
	console.log('source_file_name=' + source_file_name);
	console.log('dest_file_path=' + dest_file_path);

	var is_open = true;
	var markd_config = {
		debug: false
	}
	require('i5ting_toc')(pwd, source_file_name, dest_file_path, is_open, markd_config);
	
}