var taskData = require('../dataLayout/taskData');


module.exports = {

	getAll: function(req , res){

		taskData.getAll().exec(function(err , collection){

			if (err) {

				console.log('Can not find any tasks! Error: ' + err );

			}
			else{

				res.send(collection);
			}

		});

	},
	getById: function(req , res){


		taskData.getById(req.params.id).exec(function(err , task ){

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
			currentDate = new Date();

		newTask.dateOn = currentDate;

		taskData.create(newTask , function(err){

			if (err) {

				console.log('Can not create new task!Error: ' + err);
			}
			else{

				res.send({isAdded: true});
				
			}
	
		});
	},

	update: function(req , res , next){

		var updatedTask = req.body,
			currentDate = new Date();

			updatedTask.dateOn = currentDate;

		taskData.update(updatedTask._id , updatedTask , function(err){

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

		taskData.remove({ _id: removedTaskId } , function(err){

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