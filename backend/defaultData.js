const mockdata = require("./constant/Mock")
const MOCKS = require("./model/mockSchema")

const TUTORIAL = require("./model/TutorialSchema")
const videoData = require("./constant/Videodata")

const defaultData = async ()=>{
    try{
        await TUTORIAL.deleteMany({})
        await MOCKS.deleteMany({})
        await MOCKS.insertMany(mockdata);
        await TUTORIAL.insertMany(videoData)
    }
    catch(err){
        console.log(`Error is Found inserting Mockschema ${err.message}`);
    }
}

module.exports = defaultData