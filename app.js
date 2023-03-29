const express = require('express')
const Router = require('./routes/root.routes')
const ApiRouter = require('./routes/API/v1/api.routes')
const ErroHandler = require('./middleware/error.handler');
const app = express()
require('dotenv').config()
require('colors')

app.use(express.json());
app.use('/',Router);
app.use('/api',ApiRouter);

app.use(ErroHandler.error404 )
app.use(ErroHandler.error )
module.exports = app
