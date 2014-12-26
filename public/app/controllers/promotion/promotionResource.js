/* global app */


app.factory('PromotionResource', function($resource) {

	return {
		
		all: function() {
			var promotionResource = $resource('/api/promotions/:id', {id: '@id'});

			return promotionResource;
		},

		active: function(){
			var promotionResource = $resource('/api/promotions/active');

			return promotionResource;
		},

		completed: function(){
			var promotionResource = $resource('/api/promotions/completed');

			return promotionResource;
		},
		
	};



});