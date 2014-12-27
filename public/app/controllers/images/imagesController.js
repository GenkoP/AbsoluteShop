/* global app , $ */

'use strict';

app.controller('ImageController',
     function($scope, $http, $routeParams, $location, $modal, $log, identity ,ServerRequest , ImageResource) {

    $scope.identity = identity;

    $scope.gallery = ImageResource.query();

    $scope.open = function() {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: 'lg',
            
        });

    };

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

app.controller('ModalInstanceCtrl', function ($scope, ImageResource) {

  $scope.gallery = ImageResource.query();

});