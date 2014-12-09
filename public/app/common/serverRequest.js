/* global app */

app.factory('ServerRequest', function($http , $q){

	return {

		post: function(url , dataObject){

			var deferred = $q.defer();

			$http.post(url , dataObject).success(function(response){

				if(response.isAdded === true){

					deferred.resolve(true);

				}
				else{
					deferred.resolve(false);
				}

			});

			return deferred.promise;

		},

		put: function(url, dataObject){

			var deferred = $q.defer();

			$http.put(url , dataObject).success(function(response){

				if (response.isUpdated === true) {

					deferred.resolve(true);

				}else{

					deferred.resolve(false);

				}

			});

			return deferred.promise;

		},

		delete: function(url){

			var deferred = $q.defer();

			$http.delete(url).success(function(response){
				if(response.isDeleted === true){

					deferred.resolve(true);

				}else{

					deferred.resolve(false);

				}
			});

			return deferred.promise;
		}

	};
});