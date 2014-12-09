/* global app , angular */

app.factory('auth', function($http , $q , identity , AdminResource){
	return {
		login: function (user){

			var deferred = $q.defer();

			$http.post('/login' , user).success(function (response){
				if (response.success){
					var user = new AdminResource();

					angular.extend(user, response.user);

					identity.currentUser = user;
					
					deferred.resolve(true);
				}
				else{
					deferred.resolve(false);
				}
			});

			return deferred.promise;

		},
		logout: function() {
			var deferred = $q.defer();

			$http.get('/logout').success(function() {
				
					identity.currentUser = undefined;
					
					deferred.resolve();
			});

			return deferred.promise;
		},

		isAuthenticated: function () {
			if (identity.isAuthenticated()) {
				return true;
			}
			else{
				
				return $q.reject('not authorize');
			}


		},

		isAuthorizedForRole: function (role) {

			if (identity.isAuthorizedForRole(role)) {
				return	true;
			}
			else{
				return $q.reject('not authorize');
			}
			
		}
	};
});