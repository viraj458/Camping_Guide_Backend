const {User} = require("../models/UserModel");
const { Campsite } = require("../models/CampsiteModel")
const jwt = require('jsonwebtoken');

//User Registration
exports.registerUser = async(req,res) => {
        try {
            const user = await User.create(req.body)
            const token = jwt.sign({user},process.env.SECRETE,{expiresIn:'1h'})
            res.status(200).json({
                success:true,
                meassage:"succcessfully registerd!",
                data:{
                    "token":token
                }
            })
            // user.generateToken((err,token)=>{
            //     if (err){
            //         return res.status(400).json({
            //             success:false,
            //             message:"unable to generate jwt key",
            //             data:err
            //         });
            //     }
            //     return res.status(200).json({
            //         success:true,
            //         meassage:"succcessfully Logged in!",
            //         data:{
            //             "token":token
            //         }
            //       });
            // });
        } catch (error) {
            res.status(400).json({error:error.message})
        }

    // const user = new User(req.body);

    // user.save((err,user) =>{
    //     if(err){
    //         return res.status(422).json({
    //             sucess:false,
    //             message:"Registration faild,check the validation errors",
    //             data:err
            
    //         });
    //     }else{
            
    //         user.generateToken((err,token)=>{
    //             if (err){
    //                 return res.status(400).json({
    //                     success:false,
    //                     message:"unable to generate jwt key",
    //                     data:err
    //                 });
    //             }

    //             return res.status(200).json({
    //                 success:true,
    //                 meassage:"succcessfully Logged in!",
    //                 data:{
    //                     "token":token
    //                 }
    //               });
    //         });
            
    //     }
    // });
} 

//User login

exports.loginUser = async(req,res) => {

    try {
        const {email,password} = req.body
        const user = await User.login(email,password)
        const token = jwt.sign({user},process.env.SECRETE,{expiresIn:'1h'})
        res.status(200).json({
            success:true,
            meassage:"succcessfully Logged in!",
            data:{
                "token":token
            }
        })
    } catch (error) {
        res.status(400).json({error:error.message})
    }


    // User.findOne({email:req.body.email},(err,user) =>{
    //     if(!user){
    //         return res.status(404).json({
    //             success:false,
    //             message:"User email not found!"
    //         });
    //     }

    //     user.comparePassword(req.body.password,(err,isMatch) =>{
    //         if(!isMatch){
    //             return res.status(400).json({
    //                 success:false,
    //                 message:"Password is incorrect!"
    //             });
    //         }
            

    //         // user.generateToken((err,token)=>{
    //         //     if (err){
    //         //         return res.status(400).json({
    //         //             success:false,
    //         //             message:"unable to generate jwt key",
    //         //             data:err
    //         //         });
    //         //     }

    //         //     return res.status(200).json({
    //         //         success:true,
    //         //         meassage:"succcessfully Logged in!",
    //         //         data:{
    //         //             "token":token
    //         //         }
    //         //       });
    //         // });
    //     });
    // });
} 



//Campsite Registration
exports.registerCampsite = (req,res) => {
    // console.log('====================================');
    // console.log(req.body);
    // console.log('====================================');

    // res.json({})
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

//Campsite login

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
