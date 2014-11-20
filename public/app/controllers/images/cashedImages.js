/* global app */

'use strict';

app.factory('CashedImages' , function(ImageResource) {

	var cashedImages;

	return {
		query: function() {
			if (!cashedImages){
				cashedImages = ImageResource.query();
			}

			return cashedImages;
		}
	};

});