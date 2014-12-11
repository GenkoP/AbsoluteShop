/* global app , angular */

'use strict';

app.controller('HomeController',

    function($scope, CashedPromotion, CashedImages, InfoResource) {

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

        $scope.promotions = CashedPromotion.query();

        $scope.homeimage = CashedImages.query();

        $scope.compInfo = InfoResource.query();

    });