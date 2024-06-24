var mongoose = require('mongoose');

var registerschema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    contact:{
        type:Number
    },
    gender:{
        type:String,
        enum:['male','female','other'],
    },
    city:{
        type:String,
    },
    dob:{
        type:String,
    }
})
module.exports = mongoose.model("register",registerschema)