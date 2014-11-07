/* global app */

app.factory('AdminResource', function($resource){

	var adminResource = $resource('/api/admin/:id' , { _id: 'id' });

	adminResource.prototype.isAdmin = function (){
		return this.rolse && this.roles.indexOf('admin') > -1;
	};

	return adminResource;

});