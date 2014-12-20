var res_obj = {
    "name": "这是一个get请求",
    "url": "http://218.247.15.102/appfuse_emm_backend/v1/appversions.json",
    "type": "get",
    "params": {},
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
        "err": {},
        "status": true
    }
};

var res_to_md = require('../src/res_to_md');

doc_generate(res_obj, function(t){
	//succ
}, function(){
	//fail
});