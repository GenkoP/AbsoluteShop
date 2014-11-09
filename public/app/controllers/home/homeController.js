/* global app , angular */

app.controller('HomeController', function($scope) {
    $scope.map = {center: {latitude: 43.214873, longitude: 27.921018 }, zoom: 16 };
    $scope.marker = {
    	id: 0,
    	coords: {
    		latitude:43.214873,
    		longitude:27.921018
    	}
    };
    $scope.options = {scrollwheel: false};

  
});