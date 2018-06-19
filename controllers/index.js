const express = require('express');
const router = new express.Router();

router.use('/films', require('./films.js'));
router.use('/films', require('./reviews.js'));

// HOME
router.get('/', function(req, res) {
  res.json({ data: 'Hello'});
});

module.exports = router;
