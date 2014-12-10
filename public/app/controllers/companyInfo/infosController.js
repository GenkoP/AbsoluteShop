/* global app  */

app.controller('InfoController', function($scope, ServerRequest, $location, InfoResource) {

	$scope.compInfo = InfoResource.query();

	$scope.isVisible = false;

	$scope.showUpdateForm = function() {

		$scope.isVisible = true;

	};

	$scope.hideUpdateForm = function() {

		$scope.isVisible = false;
	};

	$scope.update = function(info, infoForm) {

		console.log(infoForm.$valid);

		if (infoForm.$valid) {

			ServerRequest.put('/api/info', info).then(function(isUpdated) {

				if (isUpdated) {

					$scope.compInfo = undefined;

					$location.path('/admin/info');

					$scope.compInfo = InfoResource.query();

					$scope.isVisible = false;

				}
			});

		} else {
			console.log('Form is invalid');
		}



	};

});