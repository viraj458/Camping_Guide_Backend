var mongoose = require("mongoose");

var schema = mongoose.Schema;

var EventModelSchema = new Schema({
    event_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:[true,'Event ID field is required!'],
    
},
event_name:{
    type:String,
    required:[true,'Event Name field is required!'],
    
},
event_location:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:[true,'User field is required!'],
    
},
starting_date:{
    type:Date,
    required:[true,'starting date field is required']
},
starting_time:{
    type:Time,
    required:[true,'starting time field is required']
},

ending_date:{
    type:Date,
    required:[true,'ending date field is required']
},
Ending_time:{
    type:Time,
    required:[true,'ending time field is required']
},
description:{
    type:String,
    required:[true,'Description field is required']

},




create_date:{
    type:Date,
    default:Date.now
}

});

const Event =mongoose.model('Event',EventModelSchema);
module.exports = {Event}