const express = require('express');
const Controller = require('../controllers/root.controller');
const router = express.Router();

router.get('/',Controller.index)

module.exports= router