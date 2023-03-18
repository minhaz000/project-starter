const express = require('express')
const Router = require('./routes/root.routes')
const ApiRouter = require('./routes/API/v1/api.routes')
const app = express()
require('dotenv').config()
require('colors')

app.use(express.json());
app.use('/',Router);
app.use('/api',ApiRouter);

module.exports = app
