const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampsiteSchema = new Schema({
      campsite_name:{
        type: String,
        required: true
      },
      location_address:{
        type: String,
        required: true
      },
      descripton:{
        type: String,
        required: true
      },
      photos_of_location:{
        type: [String],
        required: false
      },
      photos_of_legal_docs:{
        type: [String],
        required: false
      },
    });
    
    const Campsite =mongoose.model('Campsite',CampsiteSchema);
    module.exports = {Campsite}