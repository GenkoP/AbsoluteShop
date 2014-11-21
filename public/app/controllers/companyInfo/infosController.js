/* global app  */

app.controller('InfoController', function($scope ,$http , InfoResource ){
	
	$scope.compInfo = InfoResource.query();

	$scope.update = function(info){


		$http.put('/api/info', info ).success(function(){

			console.log('Filds is updated!');
		});


	};

});
