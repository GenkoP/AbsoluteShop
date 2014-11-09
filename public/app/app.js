/* global angular , toastr*/

var app = angular.module('app' , [ 'ngRoute' , 'ngResource', 'kendo.directives', 'google-maps'.ns() ])
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
		.when('/admin/adminpanel' , {
			templateUrl: '/views/admin/adminpanel',
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