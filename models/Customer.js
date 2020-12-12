var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    role: String,
    requirment: String,
    requirmenttype: String,
    department:String,
    reference:String,
    frequency:String,
    biggestRisk:String,
    expiration:Number,
    gracePeriod: Number,
    startDate:String,
    actionTaken: String,
    status: Number,
    supervisor: String,
    textarea:String,
    file:String // avatar
},{timestamps:true});
module.exports = mongoose.model('Product', ProductSchema);
