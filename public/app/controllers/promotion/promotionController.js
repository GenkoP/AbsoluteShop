/* global app */

app.controller('PromotionController' , function($scope , $http , notifier , CashedPromotion ){

	$scope.promotions = CashedPromotion.query();
	
	$scope.addNewPromotion = function(promotion){
		
		$http.post('/api/promotions' , promotion).success(function(response){

			if (response.isAdded === true) {
				
				notifier.success('Promotion is added !');

			}
			else{
				notifier.error('Can not add this promotion');
			}

		});
	};
});