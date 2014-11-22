/* global app */

app.controller('LogInController', function($scope, $location, $http, notifier, identity, auth) {
	$scope.identity = identity;

	$scope.login = function(user) {
		auth.login(user).then(function(success) {

			if (success) {

				notifier.success('Successfull login!');

			} else {

				notifier.error('User/Password combination is not valid');
			}
		});

		$location.path('/admin/adminpanel');
	};

	$scope.logout = function() {
		auth.logout().then(function() {

			notifier.success('Successfull logout');

			if ($scope.user) {

				$scope.user.username = '';
			    $scope.user.password = '';
			}

			$location.path('/');
		});
	};

});