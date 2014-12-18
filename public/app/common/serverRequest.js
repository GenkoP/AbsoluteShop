/* global app , FormData, angular */

app.factory('ServerRequest', function($http , $q , $location){

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
		},
		uploadFileToUrl: function(file, uploadUrl) {

            var fd = new FormData();

            fd.append('file', file);

            $http.post(uploadUrl, fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined }
                })
                .success(function(response) {

                    if(response.isAdded === true){

                        $location.path('/gallery');
        
                    }
                })
                .error(function() { 

                    $location.path('/admin/images');

                });
        },

	};
});