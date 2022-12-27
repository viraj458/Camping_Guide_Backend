const {User} = require("../models/UserModel");

exports.registerUser = (req,res) => {
    const user = new User(req.body);

    user.save((err,doc) =>{
        if(err){
            return res.status(422).json({
                sucess:false,
                message:"please enter unique email and username",
                data:err
            
            });
        }else{
            return res.status(200).json({
            sucess:true,
            message:"Successfully Registered"
            
            });
            
        }
    });
} 