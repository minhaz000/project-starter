const express = require('express');
const Controller = require('../../../controllers/API/api.controller');
const router = express.Router();

/**
 * @api {get} ['/'] /Get test response
 * @apiDescription Get test response
 * @apiPermission all users 
 *
 * @apiHeader {None} Authorization   User's access token
 *
 * @apiParam  {None{1-}}         ['none']     List page
 *
 * @apiSuccess {Object[]} get a string as response .
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 */
router.get('/',Controller.index)

module.exports= router