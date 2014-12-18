var Images = require('../dataLayout/imagesData'),
	fs = require('fs');

var imagePathTofoleder = __dirname + '/../../public/images/';

module.exports = {

	addNew: function(req, res , next) {

		var fstream,
			image = {};

		req.pipe(req.busboy);

		req.busboy.on('file', function(fieldname, file, fileName) {

			fstream = fs.createWriteStream(imagePathTofoleder + fileName);
			file.pipe(fstream);

			image.url = 'images/' + fileName;

			image.isForHomePageImage = false;

			Images.addNew(image, function(err) {

				if (err) {

					console.log('Can not add new image! Error: ' + err);

					res.send({isAdded: false});

					next();

				}

			});


			req.busboy.on('finish', function() {

				res.send({isAdded: true});

				res.end();

			});


		});

	},

	getAll: function(req, res) {

		Images.getAll().exec(function(err, collection) {

			if (err) {

				console.log(' Error in imagesController getAll function! Error: ' + err);
			} else {

				if (collection.length === 0) {

					console.log('Can not find any images!');
				}

				res.send(collection);
			}

		});

	},

	update: function(req , res){


		var updatedImage = req.body,
			imageId = req.body._id,
			updatedfilds = {

			isForHomePageImage: updatedImage.isForHomePageImage,

		};

		Images.update(imageId , updatedfilds , function(err){

			if (err) {

				console.log('Can not update this image ! Error: ' + err );
			}
			else{

				res.send({ isUpdated: true });
				res.end();
			}

		});
	},

	remove: function(req, res, next) {

		var pathToRemoveFile = __dirname + '/../../public/';

		var image = Images.findById(req.params.id, function(err, image) {
			if (err) {
				console.log('Can not find image whit this id!Error: ' + err);
			} else {

				fs.unlinkSync(pathToRemoveFile + image.url);

				Images.remove(req.params.id, function(err) {

					if (err) {
						console.log('Can not delete this image!Error: ' + err);
						res.send({isDeleted: false});
						res.end();
					} else {
						res.send({isDeleted: true});
					}

				});

			}
		});

	}
};