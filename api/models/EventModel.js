var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const UserRole = require("../enums/UserRole");

var schema = mongoose.Schema;

var EventModelSchema = new schema({
    event_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:[true,'Event ID field is required!'],
    
},
event_name:{
    type:String,
    required:[true,'Event Name field is required!'],
    
},
event_location:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:[true,'User field is required!'],
    
},
starting_date:{
    type:Date,
    required:[true,'starting date field is required']
},
starting_time:{
    type:String,
    required:[true,'starting time field is required']
},

ending_date:{
    type:Date,
    required:[true,'ending date field is required']
},
Ending_time:{
    type:String,
    required:[true,'ending time field is required']
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

EventSchema.pre('save',function(next){
    var user = this;
    if(user.isModified('password')){
        //checking if password field is available and modified
        bcrypt.genSalt(SALT,function(err,salt){
            if(err) return next(err)

            bcrypt.hash(user.password,salt,function(err,hash){
                if (err) return next(err)
                user.password = hash;
                next();
            });
        });
    }else{
        next();
    }
});

const Event =mongoose.model('Event',EventModelSchema);
module.exports = {Event}