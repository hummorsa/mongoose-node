/**
 * Created by hummorsa on 6/10/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberNameValidator = [
    function (val) {
        return (val.length > 0)
    },
    "Memmber Name can't be null"
];


var standupSchema = new Schema({
    memberName: {type:String, required:true, validate:memberNameValidator},
    project: String,
    workYesterday: String,
    workToday: String,
    impediment: {type:String, default:'None'},
    createdOn: {type: Date, default: Date.now}
});

//Export Model
module.exports =  mongoose.model('Standup',standupSchema);