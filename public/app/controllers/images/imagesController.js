/* global app , $ */

'use strict';

app.controller('ImageController', function($scope, fileUpload , ImageResource) {

    $scope.uploadFile = function() {

        var form = $('#formImageUpload'),
            count = form.children('input[type="file"]').length,
            uploadUrl = '/api/images';

        for (var n = 0; n < count; n += 1) {

            var file = $scope['n_' + n ];

            if (file.length > 1) {

                for (var i = 0; i < file.length; i += 1) {

                    fileUpload.uploadFileToUrl(file[i], uploadUrl);

                }

            } else {
               
                fileUpload.uploadFileToUrl(file, uploadUrl);
            }
        }

    };

     $scope.gallery = ImageResource.query();

});