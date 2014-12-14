/* global app , angular */

'use strict';

app.controller('HomeController',

    function($scope, CashedPromotion, CashedImages, InfoResource) {
    //  Google maps options
        $scope.map = {
            center: {
                latitude: 43.214873,
                longitude: 27.921018
            },
            zoom: 16
        };
        $scope.marker = {
            id: 0,
            coords: {
                latitude: 43.214873,
                longitude: 27.921018
            }
        };
        $scope.options = {
            scrollwheel: false
        };
    // END Google maps options

        $scope.myInterval = 5000;

        $scope.promotions = CashedPromotion.query();

        $scope.homeimage = CashedImages.query();

        $scope.compInfo = InfoResource.query();

    });