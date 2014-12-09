/* global app , $ */

'use strict';

app.controller('PromotionController' , 

	 function($scope , $http , $routeParams, $location  ,identity, notifier ,PromotionResource ){


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

		
		$http.post('/api/promotions' , promotion).success(function(response){


			if (response.isAdded === true) {
				
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

		console.log(promotion);

		$http.put('/api/promotions/'+ promotion._id , promotion).success(function(response){

			if (response.isUpdated === true) {

				$location.path('/admin/promotion');

				notifier.success('Promotion is change!');

			}
			else{

				notifier.error('Promotion is not change!');
			}

		});

	};

	$scope.remove = function(id){


		$http.delete('/api/promotions/' + id ).success(function(response){

			if(response.isDeleted === true){

				$scope.promotions = undefined;

				$location.path('/admin/promotion');

				$scope.promotions = PromotionResource.query();
					
				notifier.success('Promotion is deleted!');

			}
			else{

				notifier.eror('Can not delete this promotions!');

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