const {Event} = require("../models/EventModel")

exports.registerEvent = (req,res) => {
    const eventcreate = new Event(req.body);

    eventcreate.save().then(() => {
        res.status(201).json({
            message: 'Request sent!'
          });
        }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          });
           
            
        }

 