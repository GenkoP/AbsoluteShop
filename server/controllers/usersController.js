
var encryption = require('../utilities/encryption');

var users = require('../dataLayout/usersData');

module.exports = {

	getAll: function (req , res){

		users.getAll().exec(function(err , collection){

			res.send(collection);

		});

	},

	createUser: function (req , res) {

		var newUserData = req.body;

		newUserData.salt = encryption.generateSalt();

		newUserData.hashPass = encryption.generateHashPassword(newUserData.salt , newUserData.password);

		
		
		users.create(newUserData , function (err , user) {

			if (err) {

				console.log('Failed to register new user ' + err);

				return;
			}

			req.logIn(user, function(err) {
				if (err) {

					res.status(400);

					return res.send({reason: err.toString()()});
				}

				res.send(user);

			});

		});
	},

	updateUser: function (req , res){

		var updateUserData;

		if (req.user._id == req.body._id || (req.user.roles.indexOf('admin') > -1)) {

				updateUserData = req.body;

			if (updateUserData.password && updateUserData.password.length > 0) {

				updateUserData.salt = encryption.generateSalt();

				updateUserData.hashPass = encryption.generateHashPassword(updateUserData.salt , updateUserData.password);

			}

			var	updatedUserFields = {
					firstName: updateUserData.firstName,
					lastName: updateUserData.lastName
				};


			users.update({_id: req.body._id} , updatedUserFields, function () {

				res.end();
				
			});	

		}
			else{
				res.send({ reason: 'You to not have permissions!' });
			}



		
	},
};