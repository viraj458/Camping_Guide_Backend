const {Campsite} = require('../models/CampsiteModel.js')



//UPDATE
exports.updateCampsite = async (req,res,next)=>{

    try {
        const updatedCampsite = await Campsite.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        return res.status(200).json(updatedCampsite)
    } catch (err) {
        next(err)
    }
}

//DELETE
exports.deleteCampsite = async (req,res,next)=>{

    try {
        await Campsite.findByIdAndDelete(req.params.id)
        return res.status(200).json("Camspsite Deleted")
    } catch (err) {
        next(err)
    }
}

//GET
exports.getCampsite = async (req,res,next)=>{

    try {
        const campsite = await Campsite.findById(req.params.id)
        return res.status(200).json(campsite)
    } catch (err) {
        next(err)
    }
}

//GET ALL
exports.getCampsites = async (req,res,next)=>{

    try {
        const campsites = await Campsite.find(req.query).limit(4)
        return res.status(200).json(campsites)
    } catch (err) {
        next(err)
    }
}