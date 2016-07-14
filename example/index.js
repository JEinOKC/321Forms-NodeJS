var _321FormsAPI = require('../index');

(function(_321FormsAPI){

	/*
	init is only necessary if username and/or secret are not stored as environment variables
	*/
	_321FormsAPI.init({
		'username' : 'foo',
		'secret' : 'bar'
	});

	/*
		generate a key for different request types
	*/
	console.log('generating a key for different request types:');
	var requests = {
		'GET' : _321FormsAPI.generateKey('GET'),
		'POST' : _321FormsAPI.generateKey('POST'),
		'PUT' : _321FormsAPI.generateKey('PUT'),
		'PATCH' : _321FormsAPI.generateKey('PATCH')
	};

	/*output examples onto the screen*/
	console.log(requests);


	process.exit(0);

})(_321FormsAPI);