var assert = require('chai').assert;
var _321FormsAPI = require('../index');

var testUN 		= 'foo',
	testSecret 	= 'bar'

_321FormsAPI.init({
	'username' : testUN,
	'secret' : testSecret
});

describe('_321FormsAPI', function() {

	var requests = {
		'GET' : _321FormsAPI.generateKey('GET'),
		'POST' : _321FormsAPI.generateKey('POST'),
		'PUT' : _321FormsAPI.generateKey('PUT'),
		'PATCH' : _321FormsAPI.generateKey('PATCH')
	};


	describe('#action', function() {
		it('action returned for each generated object should equal the key passed in', function() {

			for(var key in requests){
				var myRequest = requests[key];

				assert.equal(key, myRequest.Action);

			}
		});
	});

	describe('#username', function() {
		it('Username returned for each generated object should equal the testUN value', function() {

			for(var key in requests){
				var myRequest = requests[key];

				assert.equal(testUN, myRequest.Username);

			}
		});
	});
});



/*
	generate a key for different request types
*/
var requests = {
	'GET' : _321FormsAPI.generateKey('GET'),
	'POST' : _321FormsAPI.generateKey('POST'),
	'PUT' : _321FormsAPI.generateKey('PUT'),
	'PATCH' : _321FormsAPI.generateKey('PATCH')
};
