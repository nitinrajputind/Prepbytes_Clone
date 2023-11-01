const TUTORIAL = require('../model/TutorialSchema')


const tutorial = async(req, res)=>{
   try{
    const tutorial = await TUTORIAL.find()
    res.status(201).send(tutorial)
   }
   catch(err){
    console.log(`Error in tutorial ${err.message}`)
   } 
}

module.exports = tutorial;