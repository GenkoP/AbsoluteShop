var path = require('path');

var rootPaths = path.normalize(__dirname + '/../../');

var connectionString ;

if (process.env.NODE_ENV) {

	connectionString = 'mongodb://user:user@ds049130.mongolab.com:49130/absoluteshopdb';
	console.log('production');
}
else{
	connectionString = 'mongodb://localhost/absoluteshopdb';
	console.log('development');
}

module.exports = {
		rootPath: rootPaths,
		db: connectionString,
		port: process.env.PORT || 8080
}; 