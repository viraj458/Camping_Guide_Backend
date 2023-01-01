const {Campsite} = require('../models/CampsiteModel.js')

exports.createCampsite = async (req,res,next)=>{

    const newCampsite = new Campsite(req.body)
    try {
        const savedCampsite = await newCampsite.save()
        return res.status(200).json(savedCampsite)
    } catch (err) {
        next
    }
}

exports.updateCampsite = async (req,res,next)=>{

    try {
        const updatedCampsite = await Campsite.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
        return res.status(200).json(updatedCampsite)
    } catch (err) {
        next(err)
    }
}
exports.deleteCampsite = async (req,res,next)=>{

    try {
        await Campsite.findByIdAndDelete(req.params.id)
        return res.status(200).json("Camspsite Deleted")
    } catch (err) {
        next(err)
    }
}
exports.getCampsite = async (req,res,next)=>{

    try {
        const campsite = await Campsite.findById(req.params.id)
        return res.status(200).json(campsite)
    } catch (err) {
        next(err)
    }
}
exports.getCampsites = async (req,res,next)=>{

    try {
        const campsites = await Campsite.find()
        return res.status(200).json(campsites)
    } catch (err) {
        next(err)
    }
}