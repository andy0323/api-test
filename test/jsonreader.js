var jsonreader = require('../src/jsonreader');

var file = '../play/request/get.req'
// file = "./req.json"

jsonreader(file, function(obj){
	console.log("cb_succ")
	
	console.log(obj);
	
}, function(){
	console.log("cb_fail")
});