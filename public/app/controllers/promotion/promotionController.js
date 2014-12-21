/* global app , $ */

'use strict';

app.controller('PromotionController' , 

	function($scope, $routeParams, $location ,$modal, ServerRequest, identity, notifier ,PromotionResource ){


	$scope.identity = identity;

	$scope.promotions = PromotionResource.query();

	$scope.promotion = PromotionResource.query().$promise.then(function(collection){

		collection.forEach(function(promotion){

			if (promotion._id === $routeParams.id){

				$scope.promotion = promotion;
			}

		});

	});

	$scope.isCollapsed = false;

	//For datepicker
	$scope.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};

	$scope.disabled = function(date, mode) {
		return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
	};

	$scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened = true;
	};

	$scope.currentDate = new Date();


	// Create new promotions
	$scope.addNew = function(promotion){

		ServerRequest.post('/api/promotions' , promotion).then(function(isAdded){

			if (isAdded) {
				
				$scope.promotions = undefined;

				$location.path('/admin/promotion');

				$scope.promotions = PromotionResource.query();
					
				notifier.success('Promotion is added !');

				$scope.promotion.productName = '';
			    $scope.promotion.price = '';

			    $scope.isCollapsed = false;

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

});