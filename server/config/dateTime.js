
module.exports = {

	formatDate: function(date) {

		var newDate = new Date(date),
			day = newDate.getDate(),
			month = newDate.getMonth(),
			year = newDate.getFullYear();

		return new Date(year, month , day);
	},

	now : function (){

		var newDate = new Date(),
			today = this.formatDate(newDate);

		return today;
	}
};