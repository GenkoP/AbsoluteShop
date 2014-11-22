/* global angular , toastr*/

var app = angular.module('app' , 
	[ 'ngRoute' , 'ngResource', 'kendo.directives', 'google-maps'.ns() ])
		.value('toastr', toastr);

app.config(function ($routeProvider) {

	var routeUserChecks = {
		adminRole: {
			authenticate: function  (auth) {
				return auth.isAuthorizedForRole('admin');
			}
		},
		authenticated: {
			authnticate: function(auth) {
		 		return	auth.isAuthenticated();
			}
		}

	};

	$routeProvider
		.when('/' , {
			templateUrl: '/views/home/home',
			controller: 'HomeController'
		})
		.when('/admin/login' , {
			templateUrl: '/views/admin/login',
			controller: 'LogInController'
		})
		.when('/promotions' , {
			templateUrl: '/views/promotion/promotions',
			controller: 'PromotionController'
		})
		// Administration routes
		.when('/admin/adminpanel' , {
			templateUrl: '/views/admin/adminpanel',
			resolve: routeUserChecks.authenticated,
		})
		.when('/admin/promotion', {
			templateUrl: 'views/admin/addNewPromotion',
			controller: 'PromotionController',
			resolve: routeUserChecks.authenticated,
		})
		.when('/admin/images' , {
			templateUrl: 'views/admin/addImage',
			resolve: routeUserChecks.authenticated,
		})
		.when('/admin/info' , {
			templateUrl: 'views/info/info',
			controller: 'InfoController',
			resolve: routeUserChecks.authenticated,
		})
		.when('/admin/info/update', {
			templateUrl: 'views/info/updateInfo',
			controller: 'InfoController',
			resolve: routeUserChecks.authenticated,
		})// Tasks
		.when('/admin/tasks', {
			templateUrl: 'views/tasks/tasks',
			controller: 'TasksController',
			resolve: routeUserChecks.authenticated,
		})
		.when('/admin/tasks/create', {
			templateUrl: 'views/tasks/create',
			controller: 'TasksController',
			resolve: routeUserChecks.authenticated,
		})
		.when('/admin/tasks/details/:id' , {
			templateUrl: 'views/tasks/details', 
			controller: 'TasksController',
			resolve: routeUserChecks.authenticated,
		})
		.when('/admin/tasks/update/:id' , {
			templateUrl: 'views/tasks/update',
			controller: 'TasksController',
			resolve: routeUserChecks.authenticated,
		});
});

app.run(function($rootScope , $location) {
	$rootScope.$on('$routeChangeError', function  (ev , current , previous , rejection) {
		if (rejection === 'not authorize') {
			$location.path('/');
		}
	});

});
