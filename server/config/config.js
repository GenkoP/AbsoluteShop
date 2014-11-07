var path = require('path');

var rootPaths = path.normalize(__dirname + '/../../');

module.exports = {
		rootPath: rootPaths,
		db: 'mongodb://user:user@ds049130.mongolab.com:49130/absoluteshopdb',
		port: process.env.PORT || 8080
};