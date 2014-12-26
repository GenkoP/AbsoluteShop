/* global app , $ */

'use strict';

app.controller('PromotionController' , 

	function($scope, $routeParams, $location ,$modal, ServerRequest, identity, notifier ,PromotionResource ){


	$scope.identity = identity;

	$scope.promotions = PromotionResource.all().query();

	$scope.promotion = PromotionResource.all().query().$promise.then(function(collection){

		collection.forEach(function(promotion){

			if (promotion._id === $routeParams.id){

				$scope.promotion = promotion;
			}

		});

	});


	$scope.isCollapsed = true;

	//For datepicker
	$scope.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};


	$scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened = true;
	};

	$scope.currentDate = new Date();

	$scope.comleated = function(){

		$scope.promotions = PromotionResource.completed().query();

	};

	$scope.active = function(){

		$scope.promotions = PromotionResource.active().query();

	};

	$scope.all = function(){

	$scope.promotions = PromotionResource.all().query();

	};

	// Create new promotions
	$scope.addNew = function(promotion){

		console.log(promotion.dateToEnd);

		ServerRequest.post('/api/promotions' , promotion).then(function(isAdded){

			if (isAdded) {
				
				$scope.promotions = undefined;

				$location.path('/admin/promotion');

				$scope.promotions = PromotionResource.query();
					
				notifier.success('Promotion is added !');

				$scope.promotion.productName = '';
				$scope.promotion.dateToEnd = '';
			    $scope.promotion.price = '';

			    $scope.isCollapsed = !$scope.isCollapsed;

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

	$scope.remove = function(id, index){

		ServerRequest.delete('/api/promotions/' + id).then(function(isDeleted){

			if(isDeleted){

				$scope.promotions.splice(index , 1);

				notifier.success('Promotion is deleted!');

			}
			else{

				notifier.error('Can not delete this promotions!');

			}

		});

	};

});