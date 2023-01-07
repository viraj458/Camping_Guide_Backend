const {Event}= require("../models/EventModel")
//const multer = require('multer');
//const express =require("express");
//const app = express();

//const fs = require("fs");

//CREATE

exports.registerEvent = async (req,res) => {
   
    

    // const Storage =multer.diskStorage({
    //     destination:function(req,file,cb){
    //         cb(null,'uploads')
    //     },
    //     filename:(req, file, cb) => {
            
    //         cb(null,file.originalname);
    //     },
      
    // })
    // const upload = multer({storage:Storage});

    // app.post("/event",upload.single("addphoto"),(req,res) =>{
    const eventcreate = new Event(req.body)
//         event_name:req.body.event_name,
//         email:req.body.email,
//         event_location:req.body.event_location,
//         starting_date:req.body.starting_date,
//         starting_time:req.body.starting_time,
//         ending_date:req.body.ending_date,
//         ending_time:req.body.ending_time,
//         event_category:req.body.event_category,
//         description:req.body.description,
//         addphoto:{
//             data: fs.readFileSync("uploads/"+ req.file.filename),
//             contentType: "image/png"
//         },
//         role:req.body.role
//     })

//    eventcreate
//    .save()
//    .then((res)=>{
//     console.log("event registered");
// })
// .catch((err) => {
//   console.log(err, "error has occur");
// });
// res.send('event registered')
//     })

// };
      try {
        const savedevent = await eventcreate.save()
        return res.status(200).json(savedevent)
    } catch (error) {
        res.status(500).json(error)
    }
}

//UPDATE
exports.EventUpdated = async (req,res) => {

    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
        return res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json(error);
    }
}

//DELETE

exports.EventDeleted = async (req,res) => {

    try {
        await Event.findByIdAndDelete(req.params.id)
        return res.status(200).json("Camspsite Deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}

//GET
exports.EventID = async (req,res) => {


  try {
      const event = await Event.findById(req.params.id)
      return res.status(200).json(event)
  } catch (error) {
      res.status(500).json(error)
  }
}

//GET ALL

exports.Events = async (req,res) => {


    try {
        const events = await Event.find()
        return res.status(200).json(events)
    } catch (error) {
        res.status(500).json(error)
    }
}


          
           
            
        
 