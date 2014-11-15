var Images = require('../data/imagesData'),
	fs = require('fs');

	var imagePathTofoleder = __dirname + '/../../public/app/images/';

module.exports = {

	addNew: function(req , res) {
		var fstream;
		var image = {};


		console.log(req.busboy);


	    req.pipe(req.busboy);

	    req.busboy.on('file', function (fieldname, file, filename) {

	        fstream = fs.createWriteStream(imagePathTofoleder + filename);
	        file.pipe(fstream);
	        image.url = imagePathTofoleder + filename;

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

};