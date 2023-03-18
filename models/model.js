const  mongoose  = require("mongoose");

CollectionSchema =   mongoose.Schema({
    name:String,
    email:{type:String, require:true},
    password:{type:String, require:true},
    address:{type:String, require:true},
    developer:{type:Boolean, require:false , default:false}
})
const model = mongoose.model.user || mongoose.model('user',CollectionSchema)
// const model = new mongoose.model('user',CollectionSchema) 

module.exports= model