/* global app , $ */

'use strict';

app.controller('ImageController', function($scope, $routeParams,identity, images , ImageResource) {

    $scope.identity = identity;

    $scope.gallery = ImageResource.query();

    $scope.uploadFile = function() {

        var form = $('#formImageUpload'),
            uploadUrl = '/api/images',
            files = $scope.inputImage;

        if (files.length !== 0) {

            for(var i = 0 ; i < files.length; i += 1 ){

                images.uploadFileToUrl(files[i], uploadUrl);

            }

        }else{

            images.uploadFileToUrl(files, uploadUrl);

        }

    };

     

     $scope.updateHomeImage = function(image){

        image.isForHomePageImage = !image.isForHomePageImage;

        images.choiceHomePageImage(image);
        
     };

});