var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const UserRole = require("../enums/UserRole");

var schema = mongoose.Schema;

var PackageModelSchema = new schema({

    campsiteid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CAMPSITE',
        required: [false, 'Campsitename field is required!'],
        unique:true
      },
    
package1:{
    type:[String],
    required:[true,'package1 field is required!'],
    
},
package1price:{
    type:String,
    required:[true,'package1price field is required'],
    

},
package2:{
    type:[String],
    required:false
    
},
package2price:{
    type:String,
    required:false
},
package3:{
    type:[String],
    required:false
},

package3price:{
    type:String,
    required:false
},


role:{
    type:String,
    enum:UserRole,
   
},


create_date:{
    type:Date,
    default:Date.now
}

});




const Package =mongoose.model('Package',PackageModelSchema);
module.exports = {Package}