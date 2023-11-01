const PROJECT = require("../model/ProjectSchema")

const ProjectData = async(req,res)=>{
    try{
        const project_data = await PROJECT.find()
        res.status(201).send(project_data)
    }
    catch(err){
        console.log(`Err in Project Data ${err.message}`)
    }
}

module.exports = ProjectData