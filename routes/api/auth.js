const express = require('express');
const router = express.Router();

// @route
// @desc
// @access
router.get('/', (req,res) =>  res.send('auth route'));

module.exports = router