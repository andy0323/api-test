var console = require('../src/log');


console.debug = true;

console.set_log_request(true);

console.log("debug = true;");


var request = require('request');
request('http://www.baidu.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
		console.debug = true;
    console.log("第一次请求baidu成功") // Show the HTML for the Google homepage.
  }
})


console.log("---------------------------------------------\n");

console.debug = false;

console.set_log_request(false);

console.log("debug = false;");

request('http://www.baidu.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
		console.debug = true;
    console.log("第二次请求baidu成功") // Show the HTML for the Google homepage.
  }
})