/* global app */


app.factory('PromotionResource', function($resource){

	var promotionResource = $resource('/api/promotions');

	return promotionResource;

});