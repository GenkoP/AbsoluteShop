var Images = require('../data/imagesData'),
	fs = require('fs');

	var imagePathTofoleder = __dirname + '/../../public/app/images/';

module.exports = {

	addNew: function(req , res) {

		var fstream;
		var image = {};


	    req.pipe(req.busboy);

	    req.busboy.on('file', function (fieldname, file, filename) {

	        fstream = fs.createWriteStream(imagePathTofoleder + filename);
	        file.pipe(fstream);
	        image.url = 'app/images/' + filename;

	    });


	    req.busboy.on('finish', function() {
	        
	    	Images.addNew(image , function(err){

	    		if(err){

	    			console.log('Can not add new image! Error: ' + err );
	    		}
	    		else{

	    			console.log('Image is create !');

	    		}

	    	});

	        
	    });

	},

	getAll: function(req , res) {
		
		Images.getAll().exec(function(err , collection){

			if(err) {

				console.log(' Error in imagesController getAll function! Error: ' + err );
			}
			else{

				if(collection.length === 0){

					console.log('Can not find any images!');
				}

				res.send(collection);
			}

		});

	}
};