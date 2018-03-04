var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ResourceSchema   = new Schema({
	name: String,
	id: Number
});

module.exports = mongoose.model('Resource', ResourceSchema);