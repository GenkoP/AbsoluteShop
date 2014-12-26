/* global app , angular */

'use strict';

app.controller('HomeController',

    function($scope,$log, CashedPromotion,PromotionResource, CashedImages, InfoResource) {
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

    $scope.sort = "dateToEnd";

    // Image sleider
    $scope.myInterval = 5000;

    $scope.promotions = PromotionResource.active().query();

    $scope.homeimage = CashedImages.query();

    $scope.compInfo = InfoResource.query();


    function getCurrentDate (){

        var today = new Date();

        var day = today.getDate();
        var month = today.getMonth();
        var year = today.getFullYear();

        return year + '-' + month + '-' + day;

    }

    $scope.currentDate = getCurrentDate();


});