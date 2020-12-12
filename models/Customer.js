var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    role: String,
    requirment: String,
    requirmenttype: String,
    department:String,
    reference:String,
    frequency:String,
    riskType:String,
   expiration:Number,
    gracePeriod: Number,
    preparation:String,
    actionTaken: String,
    avatar:String
},{timestamps:true});
module.exports = mongoose.model('Product', ProductSchema);
