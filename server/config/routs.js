
var auth = require('./auth'),
 	controller =  require('../controllers/controllersConfig');
 	
module.exports = function(app) {

	// Admin
	app.get('/api/admin' , auth.isInRole('admin'));
	app.post('/api/users'  , controller.users.createUser);
	app.put('/api/users' , auth.isAuthenticated , controller.users.updateUser);



	app.post('/login', auth.login);

	app.get('/logout', auth.logout);

	// Promotions
	app.get('/api/promotions' , controller.promotions.getAllPromotions );
	app.post('/api/promotions' , controller.promotions.createNewPromotion);

	// Images
	app.get('/api/images' , controller.images.getAll);
	app.post('/api/images' , controller.images.addNew);
	

	//Home page
	app.get('/' , function (req , res) {
		
		res.render('index' , {currentUser: req.user});
		
	});

	//Render partials
	app.get('/views/:partialArea/:partialName', function(req, res) {

		res.render('../../public/app/views/' + req.params.partialArea + '/' + req.params.partialName);

	});

	app.get('/api/*' , function(req , res) {

		res.status(404);
		res.end();

	});

	app.get('*', function(req, res) {
		res.render('index' , {currentUser: req.user});

	});
	
};