function logger(){
	// if(this.debug){
// 		console.log(t);
// 	}
}

logger.prototype.debug = false;

logger.prototype.log = function(t){
	if(this.debug){
		console.log(t);
	}
}


logger.prototype.set_log_request = function(t){
	require('request').debug = t;
}


module.exports = new logger();
