var passport = require('passport');

module.exports = {
	
	login: function(req, res, next) {
		var auth = passport.authenticate('local', function(err, user) {
			if (err) return next(err);

			if (!user) {
				res.send({
					success: false
				});

			}
			req.logIn(user, function(err) {
				if (err) return next(err);

				res.send({
					success: true,
					user: user
				});

			});

		});
		auth(req, res, next);
	},
	logout: function (req, res) {

		req.session.destroy(function (err) {
			
			if (err) {
				console.log('Can not log out this user: ' + err);
			}
			
	    res.redirect('/'); 
	  	});

	},

	isAuthenticated: function(req, res, next) {

		if (!req.isAuthenticated()) {

			res.status(403);
			res.redirect('/');

		} else {
			next();
		}

	},
	

};