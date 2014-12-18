
var auth = require('./auth'),
 	controller =  require('../controllers/controllersConfig');
 	
module.exports = function(app) {

	// Admin
	app.get('/api/admin' , auth.isInRole('admin'));
	app.post('/api/users'  , controller.users.createUser);
	app.put('/api/users' , auth.isAuthenticated , controller.users.updateUser);

	app.post('/login', auth.login);
	app.get('/logout',auth.isAuthenticated, auth.logout);

	// Promotions
	app.get('/api/promotions', controller.promotions.getAll );
	app.get('/api/promotions/:id' ,  controller.promotions.getById);
	app.post('/api/promotions' , auth.isInRole('admin'), controller.promotions.addNew);
	app.put('/api/promotions/:id' , auth.isInRole('admin'), controller.promotions.update);
	app.delete('/api/promotions/:id'  , auth.isInRole('admin'), controller.promotions.remove);
	
	// Images TODI: auth.isInRole('admin')
	app.get('/api/images' , controller.images.getAll);
	app.post('/api/images' , controller.images.addNew);
	app.put('/api/images/:id' , controller.images.update );
	app.delete('/api/images/:id' , controller.images.remove);
	
	
	// Company Information
	app.get('/api/info' , controller.companyInfo.getInfo);
	app.put('/api/info',auth.isAuthenticated, controller.companyInfo.updateInfo);

	// Tasks
	app.get('/api/tasks' , auth.isInRole('admin'), controller.tasks.getAll );
	app.get('/api/tasks/:id' , auth.isInRole('admin'), controller.tasks.getById);
	app.post('/api/tasks' , auth.isInRole('admin') , controller.tasks.addNew);
	app.put('/api/tasks/:id', auth.isInRole('admin') , controller.tasks.update);
	app.delete('/api/tasks/:id' , auth.isInRole('admin') , controller.tasks.remove);


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