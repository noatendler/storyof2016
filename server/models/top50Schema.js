var mongoose = require('mongoose');
var schema = mongoose.Schema;


var top50Schema = new schema({
  topic: {type:String, required:true},
  word : {type:String,required:true},
  num: {type:Number}
},{collection: 'top50coll'});


var top50 = mongoose.model('top50', top50Schema);
module.exports = top50;