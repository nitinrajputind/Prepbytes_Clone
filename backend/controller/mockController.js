const MOCKS = require("../model/mockSchema")

const mocktest = async(req, res)=>{
    try{
        const mock = await MOCKS.find()
        res.status(201).send(mock)
    }
    catch(err){
        console.log(`Error in Mock Api ${err.message}`)
    }
}

module.exports = mocktest