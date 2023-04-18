const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  console.log('hello');
  res.send('hello');
});

module.exports = router;