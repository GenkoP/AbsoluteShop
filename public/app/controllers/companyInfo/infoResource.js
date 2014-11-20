/* global app */

app.factory('InfoResource' , function($resource){

	var infoResource = $resource('/api/info');

	return infoResource;

});