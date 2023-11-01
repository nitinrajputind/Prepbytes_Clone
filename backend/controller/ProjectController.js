const project_data = require("../constant/project")

const ProjectData = async(req,res)=>{
    try{
        res.send(project_data)
    }
    catch(err){
        console.log(`Err in Project Data ${err.message}`)
    }
}

module.exports = ProjectData