var mongoose = require('mongoose');


var contactschema = new mongoose.Schema({
    name:{
        type:String
    },
    contact:{
        type:Number
    },
    user_id:{
        type:String
    }
})
module.exports = mongoose.model("contact",contactschema)