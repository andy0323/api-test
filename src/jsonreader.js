var fs = require('fs');

function read_json(file, cb_succ, cb_fail) {
	function parseJson (file, er, content, cb_succ, cb_fail) {
	  try {
	    d = JSON.parse((content))
			d.file_name = file.split('/').pop();;
			d.file_path = file;
			cb_succ(d);
	  } catch (er) {
			cb_fail();
	  }
	}

  fs.readFile(file, "utf8", function (err, content) {
    parseJson(file, err, content, cb_succ, cb_fail)
  })
}

module.exports = read_json