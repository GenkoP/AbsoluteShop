var Images = require('../dataLayout/imagesData'),
	fs = require('fs');

	var imagePathTofoleder = __dirname + '/../../public/app/images/';

module.exports = {

	addNew: function(req , res) {

		var fstream,
			image = {};

	    req.pipe(req.busboy);

	    req.busboy.on('file', function (fieldname, file, fileName) {

	    	console.log(fileName);


	        fstream = fs.createWriteStream(imagePathTofoleder + fileName);
	        file.pipe(fstream);

	       	image.url = 'app/images/' + fileName;


	       	Images.addNew(image , function(err){

	    		if(err){

	    			console.log('Can not add new image! Error: ' + err );
	    			

	    		}
	    		else{

	    			console.log('Image is create !');

	    		}
	        

	    });


	    req.busboy.on('finish', function() {
	        

	    	res.end();

	    	// Images.addNew(image , function(err){

	    	// 	if(err){

	    	// 		console.log('Can not add new image! Error: ' + err );
	    	// 		res.end();
	    	// 	}
	    	// 	else{

	    	// 		console.log('Image is create !');
	    	// 		res.end();

	    	// 	}

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