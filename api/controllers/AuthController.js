const {User} = require("../models/UserModel");
const { Campsite } = require("../models/CampsiteModel")

//User Registration
exports.registerUser = (req,res) => {
    const user = new User(req.body);

    user.save((err,doc) =>{
        if(err){
            return res.status(422).json({
                sucess:false,
                message:"Registration faild,check the validation errors",
                data:err
            
            });
        }else{
            return res.status(200).json({
            success:true,
            message:"Successfully Registered"
            
            });
            
        }
    });
} 

//User login

exports.loginUser = (req,res) => {
    User.findOne({email:req.body.email},(err,user) =>{
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User email not found!"
            });
        }

        user.comparePassword(req.body.password,(err,isMatch) =>{
            if(!isMatch){
                return res.status(400).json({
                    success:false,
                    message:"Password is incorrect!"
                });
            }

            user.generateToken((err,token)=>{
                if (err){
                    return res.status(400).json({
                        success:false,
                        message:"unable to generate jwt key",
                        data:err
                    });
                }

                return res.status(200).json({
                    success:true,
                    meassage:"succcessfully Logged in!",
                    data:{
                        "token":token
                    }
                  });
            });
        });
    });
} 



//Campsite Registration
exports.registerCampsite = (req,res) => {
    const campsite = new Campsite(req.body);

    campsite.save((err,doc) =>{
        if(err){
            return res.status(422).json({
                success:false,
                message:"Registration faild,check the validation errors",
                data:err
            
            });
        }else{
            return res.status(200).json({
            success:true,
            message:"Successfully Registered"
            
            });
            
        }
    });
} 

//User login

exports.loginCampsite = (req,res) => {
    Campsite.findOne({business_registration_number:req.body.business_registration_number},(err,campsite) =>{
        if(!campsite){
            return res.status(404).json({
                success:false,
                message:"Campsite's business license number not found!"
            });
        }

        campsite.comparePassword(req.body.password,(err,isMatch) =>{
            if(!isMatch){
                return res.status(400).json({
                    success:false,
                    message:"Password is not correct!"
                });
            }

            campsite.generateToken((err,token)=>{
                if (err){
                    return res.status(400).json({
                        success:false,
                        message:"unable to generate jwt key",
                        data:err
                    });
                }

                return res.status(200).json({
                    success:true,
                    meassage:"succcessfully Logged in!",
                    data:{
                        "token":token
                    }
                  });
            });
        });
    });
} 
