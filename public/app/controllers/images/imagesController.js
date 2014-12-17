/* global app , $ */

'use strict';

app.controller('ImageController', function($scope, $routeParams,identity, images , ImageResource) {

    $scope.identity = identity;

    $scope.gallery = ImageResource.query();

    $scope.image = ImageResource.query().$promise.then(function(collection){

        collection.forEach(function(image){

            if (image._id === $routeParams.id){

                $scope.image = image;
            }

        });

    });

    $scope.uploadFile = function() {

        var form = $('#formImageUpload'),
            //count = form.children('input[type="file"]').length,
            uploadUrl = '/api/images',
            file = $scope.inputImage;
            
            console.log(file);

            if (file.length !== 0) {

                for(var i = 0 ; i < file.length; i += 1 ){

                    images.uploadFileToUrl(file[i], uploadUrl);

                }

            }else{

                images.uploadFileToUrl(file, uploadUrl);

            }

    };

     

     $scope.updateHomeImage = function(image){

        images.choiceHomePageImage(image);
        
     };

});