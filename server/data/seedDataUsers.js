
var	encryption = require('../utilities/encryption');


module.exports.seedInitialUsers = function (UserModel) {

	UserModel.find({}).exec(function (err, collection) {
		if (err) {
			console.log('Can not find users ' + err);
			return;
		}

		if (collection.length === 0) {

			var salt;
			var hashedPwd;

			salt = encryption.generateSalt();
			hashedPwd = encryption.generateHashPassword(salt , 'genkop');
			UserModel.create({ username: 'genkop' , firstName: 'Genko' , lastName: 'Petrov' , salt: salt , hashPass: hashedPwd , roles: 'admin'});
			
			salt = encryption.generateSalt();
			hashedPwd = encryption.generateHashPassword(salt , 'baba');
			UserModel.create({ username: 'babameca' , firstName: 'Baba' , lastName: 'Meca' , salt: salt , hashPass: hashedPwd , roles: 'standard'});
			
			salt = encryption.generateSalt();
			hashedPwd = encryption.generateHashPassword(salt , 'kuma');
			UserModel.create({ username: 'kumalisa' , firstName: 'Kuma' , lastName: 'Lisa' , salt: salt , hashPass: hashedPwd});

			console.log('Users added to database...');
		}
	});
};
