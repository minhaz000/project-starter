const Model = require('../models/model')
const Service = require('../services/root.services')

// GET test response from server 
exports.index = async (req,res,next)=>{
try {
    let result = {status:"success"}
     result.data = await  Service.getTestResponse(req)
     res.status(200).send(result)
} 
catch (error) { next(error) }
}
