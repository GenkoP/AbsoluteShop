/* global app */

app.factory('ImageResource', function($resource){
	
	var imageResource = $resource('/api/images/:id' , { id:'@id' });

	return imageResource;

});