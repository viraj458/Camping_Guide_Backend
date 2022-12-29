module.exports = function(app){
   
 
const EventController = require("../controllers/EventController");
 
    app.post("/event",EventController.registerEvent);
}