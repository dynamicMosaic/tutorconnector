const express = require('express');
const router = express.Router();

// @route
// @desc
// @access
router.get('/', (req,res) =>  res.send('profile route'));

module.exports = router