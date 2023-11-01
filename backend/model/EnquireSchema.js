const mongoose = require("mongoose");

const userquery = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
    },
    phone:{
        type : String,
        required : true,
    },
    Query:{
        type : String,
        required : true,
    },
})

module.exports = mongoose.model("ENQUIRE", userquery);