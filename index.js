const configDB= require('./middleware/db.config')
const app = require('./app')
const port = process.env.PORT  || 8080

configDB.connectDB()



app.listen(port, () => console.log(`App listening on port ${port}!`.yellow.bold));


