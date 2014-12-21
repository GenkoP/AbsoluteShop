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
	// Create new task
	$scope.create = function(task){

		ServerRequest.post(requestUrl , task).then(function(isAdded){

			if(isAdded){


				clearScope();

				$scope.task.description = "";
				$scope.task.priority = "";
				$scope.task.dateToEnd = "";

				notifier.success('The task is addded!');

			}else{

				notifier.success('The task is addded!');

			}

		});

	};

	$scope.remove = function(id , index){

		ServerRequest.delete(requestUrl + id).then(function(isDeleted){

			if(isDeleted){

				//clearScope();

				$scope.tasks.splice(index,1);

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


	function clearScope(){

		$scope.tasks = undefined;

		$location.path('/admin/tasks');

		$scope.tasks = TaskResource.query();
	}

});