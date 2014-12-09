/* global app  */

app.controller('InfoController', function($scope,ServerRequest, $location , InfoResource ){
	
	$scope.compInfo = InfoResource.query();

	$scope.update = function(info){

		ServerRequest.put('/api/info' , info).then(function(isUpdated){
			
			if(isUpdated){

				$location.path('/admin/info');

			}
		});

		// $http.put('/api/info', info ).success(function(response){

		// 	if (response.success) {
				
		// 		$location.path('/admin/info');
		// 	}
		// });


	};

});
