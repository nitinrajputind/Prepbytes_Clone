const mockdata = require("./constant/Mock")
const MOCKS = require("./model/mockSchema")

const defaultData = async ()=>{
    try{
        await MOCKS.deleteMany({})
        await MOCKS.insertMany(mockdata);
    }
    catch(err){
        console.log(`Error is Found inserting Mockschema ${err.message}`);
    }
}

module.exports = defaultData