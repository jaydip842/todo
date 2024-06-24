var mongoose = require('mongoose');


var loginschema = new mongoose.Schema({
    
    email:{
        type:String
    },
    password:{
        type:String
    }
})
module.exports = mongoose.model("login",loginschema)