var Console = require('../src/log');


Console.debug = true;

Console.set_log_request(true);

Console.log("debug = true;");


var request = require('request');
request('http://www.baidu.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("第一次请求baidu成功") // Show the HTML for the Google homepage.
  }
})


Console.log("---------------------------------------------\n");

Console.debug = false;

Console.set_log_request(false);

Console.log("debug = false;");

request('http://www.baidu.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("第二次请求baidu成功") // Show the HTML for the Google homepage.
  }
})