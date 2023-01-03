module.exports = function(app){
   

   const AuthController = require("../controllers/AuthController");

   app.post("/register",AuthController.registerUser);
   app.post("/login",AuthController.loginUser);
   
   app.post("/register_campsite",AuthController.registerCampsite);
   app.post("/login_campsite",AuthController.loginCampsite);



}