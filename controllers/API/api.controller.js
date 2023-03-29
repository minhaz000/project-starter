exports.index = async (req,res,next)=>{
try {
    let result = {status : 'success' }
        result.data =  " this is test response "
    res.status(200).send(result)
} 
catch (error) { next(error) } 
}