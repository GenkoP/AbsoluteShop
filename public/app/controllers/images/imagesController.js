/* global app , $ */

'use strict';

app.controller('ImageController',
     function($scope, $http, $routeParams,$location, identity ,ServerRequest , ImageResource) {

    $scope.identity = identity;

    $scope.gallery = ImageResource.query();

    $scope.uploadFile = function() {

        var form = $('#formImageUpload'),
            uploadUrl = '/api/images',
            files = $scope.inputImage;

        if (files.length !== 0) {

            for(var i = 0 ; i < files.length; i += 1 ){

                ServerRequest.uploadFileToUrl(files[i], uploadUrl);

            }

        }else{

            ServerRequest.uploadFileToUrl(files, uploadUrl);

        }

    };

     $scope.choiceHomeImage = function(image){
        
        image.isForHomePageImage = !image.isForHomePageImage;

        ServerRequest.put('/api/images/' + image.id , image);
        
     };

    $scope.remove = function(image , index){

        ServerRequest.delete('/api/images/' + image._id).then(function(isDeleted){

            if(isDeleted === true){

                $('#d_' + index ).remove();

            }

        });

    };

});