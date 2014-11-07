/* global app , angular */

app.factory('identity' , function($window , AdminResource){

	var user;
	if ($window.bootstrapedUserObject) {
		
		user = new AdminResource();
		angular.extend(user, $window.bootstrapedUserObject);
	}
	
	return {
		currentUser: user,
		isAuthenticated: function () {
			 return !!this.currentUser;
		},
		isAuthorizedForRole: function  (role) {
			return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
		}
	};
});