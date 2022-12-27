var mongoose = require("mongoose");

var schema = mongoose.Schema;

var CampSiteOwnerModelSchema = new Schema({
    user_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:[true,'User field is required!'],
    
},

create_data:{
    type:Date,
    default:Date.now
}

});

const CampingSiteOwner =mongoose.model('CampingSiteOwner',CampSiteOwnerModelSchema);
module.exports = {CampingSiteOwner}