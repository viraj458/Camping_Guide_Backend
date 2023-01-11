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
exports.registerCampsite =async (req,res) => {
  try{
    const campsite = await Campsite.create(req.body);
    const token = jwt.sign({campsite},process.env.SECRETE,{expiresIn:'1h'})
        
    res.status(200).json({
                success:true,
                message:"Successfully Registered",
                data:{
                    "token":token
                }
                
            });
        }catch (error) {
                res.status(400).json({error:error.message})
        }
    }





//Campsite login

exports.loginCampsite =async  (req,res) => {

    try{
      
            const {business_registration_number,password} = req.body
            const campsite = await Campsite.login(business_registration_number,password)
            const token = jwt.sign({campsite},process.env.SECRETE,{expiresIn:'1h'})
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
}
