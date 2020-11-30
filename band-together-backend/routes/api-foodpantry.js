var express = require('express');
var router = express.Router();
const models = require('../models');

//get all post
// GET /api/v1/foodpantry/
router.get('/', (req, res) => {
  models.FoodPantry.findAll().then(posts => {
    res.json(posts);
  });
});
//Create new Post
// POST api/v1/foodpantry/
router.post('/', (req, res) => {
  if (
    !req.body ||
    !req.body.name ||
    !req.body.address ||
    !req.body.phone_number ||
    !req.body.hours ||
    !req.body.church_affiliated
  ) {
    res.status(400).json({
      error: 'Please submit all required fields',
    });
    return;
  }
  models.FoodPantry.create({
    name: req.body.name,
    address: req.body.address,
    phone_number: req.body.phone_number,
    hours: req.body.hours,
    church_affiliated: req.body.church_affiliated,
  }).then(post => {
    res.status(201).json(post);
  });
});

//update Post
// PUT /api/v1/foodpantry/101
router.put('/:id', (req, res) => {
  if (
    !req.body ||
    !req.body.name ||
    !req.body.address ||
    !req.body.phone_number ||
    !req.body.hours ||
    !req.body.church_affiliated
  ) {
    res.status(400).json({
      error: 'Please submit all required fields',
    });
    return;
  }
  models.FoodPantry.update(
    {
      name: req.body.name,
      address: req.body.address,
      phone_number: req.body.phone_number,
      hours: req.body.hours,
      church_affiliated: req.body.church_affiliated,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(updated => {
    if (updated && updated[0] > 0) {
      res.status(202).json({
        success: 'Post updated',
      });
    } else {
      res.status(404).json({
        error: 'Post not found',
      });
    }
  });
});
//delete post
// Delete /api/v1/foodpantry/101
router.delete('/:id', (req, res) => {
  models.FoodPantry.destroy({
    where: {
      id: req.params.id,
    },
  }).then(deleted => {
    if (deleted === 1) {
      res.status(202).json({
        success: 'Post deleted',
      });
    } else {
      res.status(404).json({
        error: 'Post not found',
      });
    }
  });
});
module.exports = router;
