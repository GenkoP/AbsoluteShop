/* global app , $ */

'use strict';

app.controller('PromotionController' , 

	 function($scope, $routeParams, $location , ServerRequest, identity, notifier ,PromotionResource ){


	$scope.identity = identity;

	$scope.promotions = PromotionResource.query();

	$scope.promotion = PromotionResource.query().$promise.then(function(collection){

		collection.forEach(function(promotion){

			if (promotion._id === $routeParams.id){

				$scope.promotion = promotion;
			}

		});

	});
	
	$scope.addNew = function(promotion){

		ServerRequest.post('/api/promotions' , promotion).then(function(isAdded){

			if (isAdded) {
				
				$scope.promotions = undefined;

				$location.path('/admin/promotion');

				$scope.promotions = PromotionResource.query();
					
				notifier.success('Promotion is added !');

				$scope.promCreateDiv = false;

				$scope.promotion.productName = '';
			    $scope.promotion.price = '';


			}
			else{

				notifier.error('Can not add this promotion');
			}

		});

	};

	$scope.update = function(promotion){

		var requestUrl = '/api/promotions/' + promotion._id;

		ServerRequest.put(requestUrl , promotion ).then(function(isUpdated){

			if (isUpdated) {

				$location.path('/admin/promotion');

				notifier.success('Promotion is change!');

			}else{

				notifier.error('Promotion is not change!');
			}

		});

	};

	$scope.remove = function(id){

		ServerRequest.delete('/api/promotions/' + id).then(function(isDeleted){

			if(isDeleted){

				$scope.promotions = undefined;

				$location.path('/admin/promotion');

				$scope.promotions = PromotionResource.query();
					
				notifier.success('Promotion is deleted!');

			}
			else{

				notifier.error('Can not delete this promotions!');

			}

		});

	};

	$scope.promCreateDiv = false;

	$scope.openCretePromDiv = function(){

		$scope.promCreateDiv = true;
	};

	$scope.hideDivCreateProm = function(){
		$scope.promCreateDiv = false;

	};

});