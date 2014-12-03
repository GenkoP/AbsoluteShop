/* global app, angular, FormData*/

app.service('fileUpload', function($http , $location){
	
	this.uploadFileToUrl = function(file, uploadUrl){
		
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
    };

});