/* global app */

app.factory('CashedPromotion' , function(PromotionResource) {

	var cashedPromotion;

	return {
		query: function() {
			if (!cashedPromotion){
				cashedPromotion = PromotionResource.query();
			}

			return cashedPromotion;
		}
	};

});