var dateFormat = require('dateformat');
var crypto = require('crypto');


var _321FormsAPI = function(){
	this.username = process.env._321User;
	this.secret = process.env._321Key;
};

/*
	Initialize the object - only necessary if passing username/secret into function, rather than using environment variables.
	It is highly suggested that an environment variable be used when handling the API secret key so that it is not exposed within the code
*/
_321FormsAPI.prototype.init = function(params) {
	this.username = typeof params.username !== 'undefined' ? params.username : this.username;
	this.secret = typeof params.secret !== 'undefined' ? params.secret : this.secret = typeof params.secret;
}

/*
ACTION = GET,POST,PUT,PATCH, etc
*/
_321FormsAPI.prototype.generateKey = function(action) {
	dateFormat.masks.apiTime = 'yyyy-mm-dd HH:mm:ss';

	var now = new Date();

	var params = {
		'username' : this.username,
		'secret' : this.secret,
		'timestamp' : '{ts \''+dateFormat(now, 'apiTime',true)+'\'}',
		'action' : action
	};

	var stringToHash = '{"Username":"'+params.username+'","SentDate":"'+params.timestamp+'","Action":"'+params.action+'"}';

	return {
		'Username' : params.username,
		'SentDate' : params.timestamp,
		'Action' : params.action,
		'Authorization' : crypto.createHmac('sha1', this.secret).update(stringToHash).digest('base64')
	};

	
};

module.exports = new _321FormsAPI();