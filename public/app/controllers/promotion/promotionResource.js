/* global app */


app.factory('PromotionResource', function($resource){

	var promotionResource = $resource('/api/promotions/:id' , { id:'@id' });

	return promotionResource;

});