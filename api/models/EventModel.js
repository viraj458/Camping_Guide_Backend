var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const UserRole = require("../enums/UserRole");

var schema = mongoose.Schema;

var EventModelSchema = new schema({
    
event_name:{
    type:String,
    required:[true,'Event Name field is required!'],
    
},
event_location:{
    type:String,
    required:[true,'location field is required!'],
    
},
starting_date:{
    type:Date,
    required:[true,'starting date field is required']
},
starting_time:{
    type:String,
    required:false
},

ending_date:{
    type:Date,
    required:[true,'ending date field is required']
},
ending_time:{
    type:String,
    required:false
},
description:{
    type:String,
    required:[true,'Description field is required']

},
role:{
    type:String,
    enum:UserRole,
    default:UserRole.CAMPER
},
profile_image:{
    type:String,
    required:false
    
},
Phone_number:{
    type:String,
    required:false

},


create_date:{
    type:Date,
    default:Date.now
}

});




const Event =mongoose.model('Event',EventModelSchema);
module.exports = {Event}