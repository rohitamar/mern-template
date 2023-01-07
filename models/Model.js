//Assume Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectID = require('mongodb').ObjectID;

const ModelSchema = new Schema({
    modelID: Number
});

const Model = mongoose.model('Model', ModelSchema);

//export
module.exports = Model;