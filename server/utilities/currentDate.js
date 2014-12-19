

module.exports = {

	currentDate: function(){

		var date = new Date();

		var day = date.getDate();
		var month = date.getMonth() + 1;
		var year = date.getFullYear();

		var currentDate = month + '/' + day + '/' + year;

		return currentDate;
	}

};

