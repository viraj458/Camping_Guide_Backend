var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const UserRole = require("../enums/UserRole");

const SALT = 10;


var schema = mongoose.Schema;

var UserSchema = new schema({
    fname:{
    type:String,
    required:[true,'First Name field is required!'],
    maxlength:100
},
lname:{
    type:String,
    required:[true,'Last Name field is required!'],
    maxlength:100
},
email:{
    type:String,
    required:[true,'Email field is required!'],
    unique:true
},
username:{
    type:String,
    required:[true,'username field is required!'],
    unique:true
},
password:{
    type:String,
    minlength:5,
    required:[true,'Password field is required!'],
    
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

//saving user data

UserSchema.pre('save',function(next){
    var user = this;
    if(user.isModified('password')){
        //checking if personal field is available and modified
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

//For comparing the users entered password with database login
UserSchema.methods.comparePassword = function (candidatePassword,callBack){
    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
        if(err) return callback(err);
        callBack(null,isMatch);
    });

    };


//For generating token when loggedin
UserSchema.methods.generateToken = function(callBack){
    var user =this;
    var token = jwt.sign(user_id.toHexString(),process.env.SECRETE);

    callBack(null,token);
};

//validating token for auth routes middleware
UserSchema.statics.findByToken = function(token,callBack){
    jwt.verity(token,process.env.SECRETE,function(err,decode){
        //this decode must give user_id if token is valid .ie decode = user_id
        user.findById(decode,function(err,user){
            if(err){
                res.json({status:false, data:"invalid User ID"});
            }

            callBack(null,user);
        });
    });
};

const User =mongoose.model('User',UserSchema);
module.exports = {User}
