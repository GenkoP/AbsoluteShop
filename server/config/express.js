var express = require('express'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	busBoy = require('connect-busboy'),
	passport = require('passport');

module.exports = function(app, config) {
	
	app.set('view engine', 'jade');
	app.set('views', config.rootPath + '/server/views');

	
	app.use(cookieParser());

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	
	app.use(busBoy({immediate: false}));

	app.use(session({
		secret: 'magic unicorn',
		resave: true,
		saveUninitialized: true,
	}));
	
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(express.static(config.rootPath + '/public'));
};