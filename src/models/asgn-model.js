var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var AsgnSchema = new Schema({
    courseName: String,
    assignmentName: {
        type: String,
        required: true
    },
    dueDate: Date
});

module.exports = mongoose.model('Asgn', AsgnSchema);