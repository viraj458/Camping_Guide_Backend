const {Event} = require("../models/EventModel")


//create
exports.registerEvent = async (req,res) => {
    const eventcreate = new Event(req.body)

    
      try {
        const savedevent = await eventcreate.save()
        return res.status(200).json(savedevent)
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


          
           
            
        
 