const mongoose = require('mongoose')


const validator = require('validator')

const userschema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:['3','Must be atleast 3 charaters , got only {value} ',]
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    }
    
})





const user = mongoose.model("userlogin",userschema)

module.exports = user