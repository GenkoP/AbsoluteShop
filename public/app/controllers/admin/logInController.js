/* global app */

app.controller('LogInController', function($scope, $location, $http, notifier, identity, auth) {
	$scope.identity = identity;

	$scope.login = function(user) {
		auth.login(user).then(function(success) {

			if (success) {

				notifier.success('Sucsessful login!');

			} else {

				notifier.error('User/Password combination is not valid');
			}
		});
	};

	$scope.logout = function() {
		auth.logout().then(function() {

			notifier.success('Sucsessful logout');

			if ($scope.user) {

				$scope.user.username = '';
			    $scope.user.password = '';
			}

			$location.path('/');
		});
	};

});