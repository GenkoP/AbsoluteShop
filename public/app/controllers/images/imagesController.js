/* global app */

app.controller('ImagesController' , function($scope , $http){

	$scope.uploadFile = function (image){

		$http.post('/api/images').success(function(){

			console.log('Image is added');

		});

	};

});