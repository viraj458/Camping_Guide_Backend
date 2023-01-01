module.exports = function(app){
   
 
const EventController = require("../controllers/EventController");
 
    app.post("/event",EventController.registerEvent);
    app.put("/event/:id",EventController.EventUpdated);
    app.delete("/event/:id",EventController.EventDeleted);
    app.get("/event/:id",EventController.EventID);
    app.get("/event",EventController.Events);


}