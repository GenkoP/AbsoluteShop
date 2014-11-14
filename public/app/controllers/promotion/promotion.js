/* global app */

app.factory('promotion', function($http , $q){
	
	return {

		create: function(promotion){

			var deferred = $q.defer();

			$http.post('/api/promotions' , promotion).success(function(){

				console.log('');
				
			});
		}

	};
	
});