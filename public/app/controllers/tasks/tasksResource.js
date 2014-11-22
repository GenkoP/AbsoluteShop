/* global app */

app.factory('TaskResource',  function($resource){
	
	var taskResource = $resource('/api/tasks/:id' , { id: '@id' } );

	return taskResource;

});