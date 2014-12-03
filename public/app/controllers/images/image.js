/* global app, angular, FormData*/

app.factory('images', function($http , $location){
	
    return {

        uploadFileToUrl: function(file, uploadUrl){
            
            var fd = new FormData();

            fd.append('file', file);

            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
            .success(function(response){

              if(response.isAdded === true){
                
                $location.path('/gallery');
              }

            })
            .error(function(){
            });
        },

        choiceHomePageImage: function(image){

            console.log(image);

            $http.put('/api/images/' + image.id , image).success(function(response){

            })
            .error(function(response){

            });

        }
    };

});