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


		var newTask = req.body;

		taskData.create(newTask , function(err){

			if (err) {

				console.log('Can not create new task!Error: ' + err);
			}
			else{

				res.send({isCreated: true});
				
			}
	
		});
	},

	update: function(req , res , next){

		console.log(req.body);

		var updatedTask = req.body;

		var updatedFilds = {

			taskDescript: updatedTask.taskDescript,
			priority: updatedTask.priority,
			dateOnCreate: updatedTask.dateOnCreate,
			dateToFinish: updatedTask.dateToFinish,

		};

		taskData.update(updatedTask._id , updatedFilds , function(err){

			if(err){
				console.log('Can not update this filds on tasks! Error: ' + err );
			}
			else{

				next();
			}

		});
	},

	remove: function(req , res ){

		console.log(req.params);

		var removedTask = req.params;

		taskData.remove({ _id: req.params.id } , function(err){

			if(err){

				console.log('Can not remove this task!Error: ' + err );
			}
			
		});

	}

};