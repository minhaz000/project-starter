const multer = require('multer');
const path =  require('path');
const storage = multer.diskStorage({
  destination : './public/images',
  filename:(req,file,cb)=>{
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,  uniqueSuffix + '-' + file.originalname.toLocaleLowerCase().split(" ").join("-"))
  }
})
const uploader = multer({
      storage:storage,
      limits : {fieldNameSize: 4*1000000},
      fileFilter:(req,file,cb)=>{
                  const suportedformats = /png|jpeg|jpg/;
                  const extension = path.extname(file.originalname)
                  
                  suportedformats.test(extension)? cb(null,true) : cb(new Error(' invalid file type '))
                  

      }

})


module.exports = uploader