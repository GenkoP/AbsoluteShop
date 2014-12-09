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

				clearScope();

				$scope.task.taskDescript = "";
				$scope.task.priority = "";
				$scope.task.dateOnCreate = "";
				$scope.task.dateToFinish = "";

				notifier.success('The task is addded!');

				$scope.isVisibleCreateDiv = false;

			}else{

				notifier.success('The task is addded!');

			}

		});

	};

	$scope.remove = function(id){

		ServerRequest.delete(requestUrl + id).then(function(isDeleted){

			if(isDeleted){

				clearScope();

				notifier.success('Task is removed!');


			}else{

				notifier.error('Can not remove this task!');

			}

		});


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
	};

	$scope.isVisibleCreateDiv = false;

	$scope.openCreateDiv = function(){

		$scope.isVisibleCreateDiv = true;

	};
	$scope.closeCreateDiv = function(){

		console.log('baba meca');

		$scope.isVisibleCreateDiv = false;
	};

	function clearScope(){

		$scope.tasks = undefined;

		$location.path('/admin/tasks');

		$scope.tasks = TaskResource.query();
	}

});