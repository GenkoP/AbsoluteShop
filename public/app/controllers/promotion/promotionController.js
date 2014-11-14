/* global app */

app.controller('PromotionController' , function($scope , $http , notifier ){

	$scope.addNewPromotion = function(promotion){
		
		$http.post('/api/promotions' , promotion).success(function(respinse){

			if (respinse.isAdded === true) {
				
				notifier.success('Promotion is added !');

			}
			else{
				notifier.error('Can not add this promotion');
			}

		});
	};
});