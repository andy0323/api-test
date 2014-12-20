var fs = require('fs');

function res_to_md(res_obj, cb_succ, cb_fail) {
	var str = '';
	
	cb_succ(str);
	return str;
}

module.exports = res_to_md