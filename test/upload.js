var request = require('request');
var fs = require("fs");
require('request').debug = true

 url = "http://127.0.0.1:3456/post/formdata"
var formData = {
  // Pass a simple key-value pair
  // Pass multiple values /w an Array
	filename: fs.createReadStream('play/api.md')
};
return request.post({
	url : url,
	formData: formData
},function(err, httpResponse, body) {
	var err = null;
	if(httpResponse.statusCode != 200){
		err = new Error("请求失败");
	}
	console.log(httpResponse.statusCode);
})


//
// request.post({url:'http://service.com/upload', formData: formData}, function optionalCallback(err, httpResponse, body) {
//   if (err) {
//     return console.error('upload failed:', err);
//   }
//   console.log('Upload successful!  Server responded with:', body);
// });