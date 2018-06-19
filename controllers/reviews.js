const films = require('../models/films')();
const Film = require('../models/film');
const Review = require('../models/review');

const express = require('express');
const reviewRouter = new express.Router();

// // SHOW
// reviewRouter.get('/:id', function(req, res) {
//   const index = req.params.id;
//   res.json({data: films[index]});
// });

// UPDATE
reviewRouter.put('/:id', function(req, res) {
  const index = req.params.id;
  films[index] = new Review(req.body);
  res.json({data: films});
});

// // DELETE
// reviewRouter.delete('/:id', function(req, res) {
//   const index = req.params.id;
//   films.splice(index, 1);
//   res.json({data: films});
// });

// // INDEX
// reviewRouter.get('/', function(req, res) {
//   res.json({data: films});
// });

// CREATE
reviewRouter.post('/', function(req, res) {
  const newReview = new Review(req.body);
  films.push(newFilm);
  res.json({data: films});
});

module.exports = reviewRouter;
