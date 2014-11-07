/* global angular , toastr*/

var app = angular.module('app' , [ 'ngRoute' , 'ngResource' , 'kendo.directives' ]).value('toatst', toastr);

app.config(function ($routeProvider) {
	$routeProvider.when('/' , {
		templateUrl: '/views/home/home'
	});
});