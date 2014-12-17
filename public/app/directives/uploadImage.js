/* global app , $  , FileReader , e */

'use strict';
app.directive('imageUpload', ['$parse', '$compile', function($parse , $compile) {

	return {
		restrict: 'A',
		templateUrl: '/app/directives/uploadImages.html',
		replace: true,

		link: function(scope, iElm, iAttrs, controller) {

			var inputImage = $('#inputImage'),
				imageVisibility = $('#imageVisibility'),
				imageFiles = [],
				numberImages = 0;

			scope.addnew = function() {

				inputImage.click();

			};

			scope.removeOne = function(numberImageToRemove) {

				$('.number_' + numberImageToRemove).remove();

				imageFiles.splice(numberImageToRemove -1 , 1);
				
			};

			scope.clearAll = function() {

				imageFiles.splice(0 ,imageFiles.length);
				numberImages = 0;

				imageVisibility.children().remove();

			};

			scope.readURL = function(input) {

				$(input.files).each(function() {

					var fileImage = this;
					// Push file to global files array
					imageFiles.push(fileImage);
					
					// For visibility images from selected input
					var reader = new FileReader();
					reader.readAsDataURL(this);
					reader.onload = function(e) {

						numberImages += 1;
						appendImageTag(e , fileImage , numberImages);
					};
				});

				appendFileToScope(imageFiles);

			};

			function appendFileToScope(images) {

				var model = $parse('inputImage');
				var modelSetter = model.assign;

				if (images.length > 0) {

					scope.$apply(function() {

						modelSetter(scope, images);

					});
				}

			}

			function appendImageTag(e , fileImage, numberImages) {

				var img = $('<img>')
					.addClass('thumbnail')
					.attr('src', e.target.result)
					.width(200)
					.height(200);

				var imageWrapper = $('<div>')
					.addClass('number_' + numberImages)
					.addClass('img-conteiner');

				var removeBtn = $('<span>')
					.attr('ng-click' , 'removeOne('+ numberImages +')')
					.addClass('glyphicon glyphicon-remove-circle img-remove pull-right');

				var name = $('<p>')
					.addClass('img-remove')
					.text(fileImage.name);

				var size = $('<p>')
					.text('Image size is: ' + fileImage.size );

				$compile(removeBtn)(scope);

				imageWrapper.append(name ,removeBtn, img, size);

				imageVisibility.append(imageWrapper);

			}

		}
	};
}]);