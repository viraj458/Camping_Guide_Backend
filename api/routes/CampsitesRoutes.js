const { verifyToken2 } = require("../utills/verifyToken");


module.exports = function(app){

const express = require('express')
// const { createCampsite, updateCampsite, deleteCampsite, getCampsite, getCampsites } = require('../controllers/CampsiteController.js')
const CampsiteController= require('../controllers/CampsiteController.js')

app.get("/checkauthentication",verifyToken2,(_req,res)=>{
    res.send("Hello C,you are loggedin ")
});

//const router = express.Router()

// //CREATE
// app.post('/campsite', CampsiteController.createCampsite)
//UPDATE
app.put('/campsite/:id', CampsiteController.updateCampsite)
//DELETE
app.delete('/campsite/:id', CampsiteController.deleteCampsite)
//GET
app.get('/campsite/:id', CampsiteController.getCampsite)
//GET ALL
app.get('/campsites', CampsiteController.getCampsites)

}



//module.exports = router