/* global app */

app.factory('ImageResource', function($resource){
	
	var imageResource = $resource('/api/images');

	return imageResource;

});