/* global app */

app.directive('emailIsValid', function() {

	var EMAIL_REGEXP = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

	return {
		require: 'ngModel',
		restrict: '',
		link: function(scope, elm, attrs, ctrl) {
			// only apply the validator if ngModel is present and Angular has added the email validator
			if (ctrl && ctrl.$validators.email) {

				// this will overwrite the default Angular email validator
				ctrl.$validators.email = function(modelValue) {
					return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
				};
			}
		}
	};

});