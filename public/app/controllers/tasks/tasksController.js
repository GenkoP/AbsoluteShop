/* global app */

app.controller('TasksController', 

	function($scope , ServerRequest , $routeParams, $location , notifier , TaskResource){

	var requestUrl = '/api/tasks/';

	$scope.tasks = TaskResource.query();

	$scope.task = TaskResource.query().$promise.then(function(collection){

		collection.forEach(function(task){

			if (task._id === $routeParams.id ) {

				$scope.task = task;

			}

		});

	});

	$scope.create = function(task){

		ServerRequest.post(requestUrl , task).then(function(isAdded){

			if(isAdded){

				$location.path('/admin/tasks');

				notifier.success('The task is addded!');

			}else{

				notifier.success('The task is addded!');

			}

		});

		// $http.post('/api/tasks', task).success(function(response){

		// 	if (response.isAdded === true) {

		// 		$location.path('/admin/tasks');

		// 		notifier.success('The task is addded!');

		// 	}
		// 	else{


		// 	}

		// });

	};

	$scope.remove = function(id){

		ServerRequest.delete(requestUrl + id).then(function(isDeleted){

			if(isDeleted){

				$location.path('/admin/tasks');

				notifier.success('Task is removed!');


			}else{

				notifier.error('Can not remove this task!');

			}

		});

		// $http.delete('/api/tasks/' + id ).success(function(response){

		// 	if (response.isDeleted === true) {

		// 		$location.path('/admin/tasks');

		// 		notifier.success('Task is removed!');

		// 	}
		// 	else{
		// 		notifier.error('Can not remove this task!');
		// 	}
		// });
	};

	$scope.update = function(task){

		ServerRequest.put(requestUrl + task._id , task).then(function(isUpdated){

			if (isUpdated) {

				$location.path('/admin/tasks');

				notifier.success('The task is updated!');

			}else{

				notifier.error('Can not remove this task!');

			}
		});

		// $http.put('/api/tasks/' + task._id , task).success(function(response){

		// 	if(response.isDeleted === true){

		// 		$location.path('/admin/tasks');

		// 		notifier.success('The task is updated!');
		// 	}
		// 	else{

		// 		notifier.error('Can not remove this task!');

		// 	}

		// });
	};

});