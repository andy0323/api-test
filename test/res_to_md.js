var fs = require('fs');
var shell = require('shelljs');

var res_obj = {
    "name": "这是一个get请求",
    "url": "http://218.247.15.102/appfuse_emm_backend/v1/appversions.json",
    "type": "get",
    "params": {"Hello":"World"},
    "file_name": "get.req",
    "file_path": "/Users/sang/workspace/github/api-test/play/request/get.req",
    "response": {
        "result": {
            "status": {
                "code": 0,
                "msg": ""
            },
            "data": {
                "id": 18,
                "versionId": "4565",
                "content": "67567567",
                "url": "https://shiren1118.b0.upaiyun.com/AppCenter0627.plist",
                "createTime": "2014-09-22 11:14:30"
            }
        },
        "err": null,
        "status": true
    }
};

var res_to_md = require('../src/res_to_md');

res_to_md(res_obj, function(t){
    // 获取文件名
    var resName = res_obj.file_name.replace(/.req/, '.md');
    // 写入路径
    var resPath = 'markdown/' + resName;

    fs.writeFile(resPath, t, function(err){
       
        if(err){
            return console.log(err);
        }
    });

    //succ
}, function(){
	//fail
});