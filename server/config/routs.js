
var auth = require('./auth'),
 	controller =  require('../controllers/controllersConfig');
 	
module.exports = function(app) {

	// Admin
	app.get('/api/admin' , auth.isInRole('admin'));
	app.get('/api/users' , controller.users.getAll);
	app.post('/api/users'  , controller.users.createUser);
	app.put('/api/users' , auth.isAuthenticated , controller.users.updateUser);

	app.post('/login', auth.login);
	app.get('/logout',auth.isAuthenticated, auth.logout);

	// Promotions
	app.get('/api/promotions', controller.promotions.getAll );
	app.get('/api/promotions/active' , controller.promotions.active);
	app.get('/api/promotions/completed', controller.promotions.completed);
	app.get('/api/promotions/:id' ,  controller.promotions.getById);
	app.post('/api/promotions' ,  controller.promotions.addNew);
	app.put('/api/promotions/:id' ,  controller.promotions.update);
	app.delete('/api/promotions/:id'  ,  controller.promotions.remove);
	
	// Images TODI: auth.isInRole('admin')
	app.get('/api/images' , controller.images.getAll);
	app.post('/api/images' , controller.images.addNew);
	app.put('/api/images/:id' , controller.images.update );
	app.delete('/api/images/:id' , controller.images.remove);
	
	
	// Company Information
	app.get('/api/info' , controller.companyInfo.getInfo);
	app.put('/api/info',auth.isAuthenticated, controller.companyInfo.updateInfo);

	// Tasks
	app.get('/api/tasks' ,  controller.tasks.getAll );
	app.get('/api/tasks/:id' ,  controller.tasks.getById);
	app.post('/api/tasks' ,  controller.tasks.addNew);
	app.put('/api/tasks/:id',  controller.tasks.update);
	app.delete('/api/tasks/:id' ,  controller.tasks.remove);


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