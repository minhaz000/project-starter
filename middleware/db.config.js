const mongoose = require('mongoose')

// dataBase Connection 
exports.connectDB=()=>{ mongoose.connect(process.env.DATABASE_URL ||"mongodb://localhost:27017/test",{
                      useNewUrlParser: true, 
                      useUnifiedTopology: true
                      })
        .then(()=>{ console.log("Database connected successfully !!!".cyan.bold) })
        .catch((err)=>{console.log(err)})
}