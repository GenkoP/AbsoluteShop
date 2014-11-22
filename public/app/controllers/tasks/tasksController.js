/* global app */

app.controller('TasksController', function($scope , $http , $routeParams  , TaskResource){

	$scope.tasks = TaskResource.query();

	$scope.task = TaskResource.query().$promise.then(function(collection){

		collection.forEach(function(task){

			if (task._id === $routeParams.id ) {

				$scope.task = task;

			}

		});

	});

	$scope.createTasks = function(task){

		$http.post('/api/tasks', task);

	};

	$scope.remove = function(id){

		$http.delete('/api/tasks/' + id );
	};

	$scope.update = function(task){

		console.log(task);

		$http.put('/api/tasks/' + task._id , task);
	};

});