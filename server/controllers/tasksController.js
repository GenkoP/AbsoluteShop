var data = require('../dataLayout/data'),
	dateTime = require('../config/dateTime');


module.exports = {

	getAll: function(req , res){

		data.tasks.find({}).exec(function(err , collection){

			if (err) {

				console.log('Can not find any tasks! Error: ' + err );

			}
			else{

				res.send(collection);
			}

		});

	},

	active: function(req, res, next) {

		// Query object to find all promotion who is active
			var queryWhoIsActive = {

			// Function(IIFE) who runnitng in mongodb server 
				$where: function() {

					var today = (function() {

						var newDate = new Date(),
							day = newDate.getDate(),
							month = newDate.getMonth(),
							year = newDate.getFullYear();
						return new Date(year, month, day);

					}());


					return today <= this.dateToEnd;
				}
			};

		

		data.tasks.find(queryWhoIsActive).exec(function(err , collection){

			if (err) {

				console.log('Can not find active promotion.Error: ' + err );

				res.end();

			}else{
				res.send(collection);
				console.log(collection);
			}

		});

	},

	completed: function(req, res, next){

	// Query object to find all promotion who is active
		var queryWhoIsCompleted = {

		// Function(IIFE) who runnitng in mongodb server 
			$where: function(){

				var today = (function() {

						var newDate = new Date(),
							day = newDate.getDate(),
							month = newDate.getMonth(),
							year = newDate.getFullYear();
						return new Date(year, month, day);

					}());

				return today > this.dateToEnd;
			}
		};

		data.tasks.find(queryWhoIsCompleted).exec(function(err , collection){

			if (err) {
				console.log('Can not find completed promotions.Error ' + err);
				res.end();
			}else{
				res.send(collection);
				console.log(collection);
			}

		});

	},


	getById: function(req , res){


		data.tasks.getById(req.params.id).exec(function(err , task ){

			if (err) {
				console.log('Can not find task with this id! Error: ' + err );
			}
			else{

				res.send(task);

			}

		});
		

	},

	addNew: function(req , res){

		var newTask = req.body,
			today = dateTime.now();

		newTask.dateOn = today;
		newTask.dateToEnd = dateTime.formatDate(req.body.dateToEnd);

		data.tasks.create(newTask , function(err){

			if (err) {

				console.log('Can not create new task!Error: ' + err);
			}
			else{

				res.send({isAdded: true});
				
			}
	
		});
	},

	update: function(req , res , next){

		var updatedTask = req.body;

		data.tasks.update(updatedTask._id , updatedTask , function(err){

			if(err){

				console.log('Can not update this filds on tasks! Error: ' + err );

				res.send({ isUpdated: false });

			}
			else{

				res.send({ isUpdated: true });
				res.end();
			}

		});
	},

	remove: function(req , res ){


		var removedTaskId = req.params.id;

		data.tasks.remove({ _id: removedTaskId } , function(err){

			if(err){

				console.log('Can not remove this task!Error: ' + err );

				res.send({ isDeleted: false });
			}
			else{

				res.send({ isDeleted: true });
				res.end();

			}
			
		});

	}

};