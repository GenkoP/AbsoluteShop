/* global app  */

app.controller('InfoController', function($scope , $http , $location , InfoResource ){
	
	$scope.compInfo = InfoResource.query();

	$scope.update = function(info){


		$http.put('/api/info', info ).success(function(response){

			if (response.success) {
				
				$location.path('/admin/info');
			}
		});


	};

});
