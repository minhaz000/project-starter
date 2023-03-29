// ================ Error 404 Not Found Error ================= 
exports.error404 =(req,res,next)=>{
  const error = {status:'Not Found', message: 'URL not found.Please enter a valid URL' } 
  res.status(404).send(error)
}

// ============== Generic error Handler =================
exports.error =(error,req,res,next)=>{
  let result = { status: 'failed'}
  error.message? result.message = error.message:
                 result.message = 'There was an Internal Server Error'

  res.status(500).send(result)
}