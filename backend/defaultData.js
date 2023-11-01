const mockdata = require("./constant/Mock")
const MOCKS = require("./model/mockSchema")

const TUTORIAL = require("./model/TutorialSchema")
const videoData = require("./constant/Videodata")


const PROJECT = require("./model/ProjectSchema")
const projectData = require('./constant/project')

const defaultData = async ()=>{
    try{
        await TUTORIAL.deleteMany({})
        await MOCKS.deleteMany({})
        await PROJECT.deleteMany({})
        await MOCKS.insertMany(mockdata);
        await TUTORIAL.insertMany(videoData)
        await PROJECT.insertMany(projectData)
    }
    catch(err){
        console.log(`Error is Found inserting Mockschema ${err.message}`);
    }
}

module.exports = defaultData