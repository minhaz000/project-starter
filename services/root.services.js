exports.getTestResponse = async(req,res,next)=>{
try {
  
  const message = " this this test response "
  return message
} 
catch (error) { console.log(error)}
}