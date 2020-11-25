var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', (req, res) => {
  if (
    !req.body ||
    !req.body.name ||
    !req.body.address ||
    !req.body.phone_number ||
    !req.body.hours ||
    !req.body.category
  ) {
    res.status(400).json({
      error: 'Please submit all required fields',
    });
    return;
  }
  models.Post.create({
    name: req.body.name,
    address: req.body.address,
    phone_number: req.body.phone_number,
    hours: req.body.hours,
    category: req.body.category,
  }).then(post => {
    res.status(201).json(post);
  });
});

module.exports = router;
