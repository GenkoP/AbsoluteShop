/* global app , $  , FileReader , e */

app.directive('imageUpload', ['$parse', function($parse) {

	return {
		restrict: 'A',
		templateUrl: '/app/directives/uploadImages.html',
		replace: true,

		link: function($scope, iElm, iAttrs, controller) {

			var form = $('#formImageUpload');

			$scope.addnew = function() {

				var count = form.children('input[type="file"]').length,
					inputName = 'n_' + count;

				var newImgInput = $('<input multiple>')
					.attr('type', 'file')
					.attr('id', inputName)
					.attr('onchange', 'angular.element(this).scope().readURL(this)')
					.attr('name', inputName)
					.attr('accept', 'image/*')
					.hide();


				form.append(newImgInput);

				$('#' + inputName).click();

			};

			$scope.readURL = function(input) {

				var fileCount = input.files.length,
					reader = new FileReader();

				appendFileToScope(input);

				if (fileCount > 1) {


					$(input.files).each(function() {
						var reader = new FileReader();
						reader.readAsDataURL(this);
						reader.onload = function(e) {
							appendImageTag(e);
						};
					});
				


				} else {

					reader.onload = function (e){
					 appendImageTag(e);
					};

					reader.readAsDataURL(input.files[0]);
				}
			};

			function appendImageTag(e) {

					var img = $('<img>')
						.addClass('imgVisibility')
						.attr('src', e.target.result)
						.width(200)
						.height(200);

					$('#imageWrapper').append(img);
			}

			function appendFileToScope(input) {

				var model = $parse(input.name);
				var modelSetter = model.assign;


				if (input.files.length === 1 && input.files.length > 0) {

					$scope.$apply(function() {

						modelSetter($scope, input.files[0]);

					});
				} else {

					var files = [];

					for (var i = 0; i < input.files.length; i += 1) {

						files.push(input.files[i]);
					}

					$scope.$apply(function() {

						modelSetter($scope, files);

					});

				}

			}

		}
	};
}]);