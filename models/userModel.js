const mongoose = require("mongoose")

const User = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    repassword: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Users", User)