module.exports = function(app){
   

   const AuthController = require("../controllers/AuthController");

   //user registration
   app.post("/register",AuthController.registerUser);
  
  //user login
   app.post("/login",AuthController.loginUser);
   
   //campsite registration
   app.post("/register_campsite",AuthController.registerCampsite);

   //campsite login
   app.post("/login_campsite",AuthController.loginCampsite);



}