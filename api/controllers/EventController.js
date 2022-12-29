const {Event} = require("../models/EventModel")

exports.registerEvent = (req,res) => {
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
            sucess:true,
            message:"Successfully Registered"
            
            });
            
        }
    });
} 