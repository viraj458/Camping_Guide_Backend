module.exports = function(app){
   
 
const EventController = require("../controllers/EventController");
 
    app.post("/event",EventController.registerEvent);
    app.get("/event/:id",EventController.EventID);
    app.get("/event",EventController.Events);

}