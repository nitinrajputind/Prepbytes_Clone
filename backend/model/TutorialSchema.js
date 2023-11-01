const mongoose = require("mongoose")


const TutorialSchema = mongoose.Schema({
    video:{
        type : String,
        required : true
    },
    heading:{
        type : String,
        required : true
    },
    detail: {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("TUTORIAL", TutorialSchema)