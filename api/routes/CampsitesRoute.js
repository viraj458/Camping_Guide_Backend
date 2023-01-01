module.exports = function(app){

const express = require('express')
// const { createCampsite, updateCampsite, deleteCampsite, getCampsite, getCampsites } = require('../controllers/CampsiteController.js')
const CampsiteController= require('../controllers/CampsiteController.js')



const router = express.Router()

//CREATE
router.post('/campsite', CampsiteController.createCampsite)
//UPDATE
router.put('/campsite/:id', CampsiteController.updateCampsite)
//DELETE
router.delete('/campsite/:id', CampsiteController.deleteCampsite)
//GET
router.get('/campsite/:id', CampsiteController.getCampsite)
//GET ALL
router.get('/campsites', CampsiteController.getCampsites)

}



// module.exports = router