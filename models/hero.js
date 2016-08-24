var mongoose = require('mongoose');

// Create a model / schema
var heroSchema = mongoose.Schema({
    make:       {type : String},
    model:       {type : String},
    year:       {type : Number},
    parts:     {type : Array, default : []},

});

// export the model
module.exports = mongoose.model('Hero', heroSchema, 'heroes'); // Our entrypoint into the heroes collection in the DB
// heroes
