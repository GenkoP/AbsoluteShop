/* global app */

app.controller('TasksController', 

	function($scope , $http , $routeParams, $location , notifier , TaskResource){

	$scope.tasks = TaskResource.query();

	$scope.task = TaskResource.query().$promise.then(function(collection){

		collection.forEach(function(task){

			if (task._id === $routeParams.id ) {

				$scope.task = task;

			}

		});

	});

	$scope.create = function(task){

		$http.post('/api/tasks', task).success(function(response){

			if (response.isAdded === true) {

				$location.path('/admin/tasks');

				notifier.success('The task is addded!');

			}
			else{

				notifier.error('can not add this task!');

			}

		});

	};

	$scope.remove = function(id){

		$http.delete('/api/tasks/' + id ).success(function(response){

			if (response.isDeleted === true) {

				$location.path('/admin/tasks');

				notifier.success('Task is removed!');

			}
			else{
				notifier.error('Can not remove this task!');
			}
		});
	};

	$scope.update = function(task){


		$http.put('/api/tasks/' + task._id , task).success(function(response){

			if(response.isDeleted === true){

				$location.path('/admin/tasks');

				notifier.success('The task is updated!');
			}
			else{

				notifier.error('Can not remove this task!');

			}

		});
	};

});