const films = require('../models/films')();
const Film = require('../models/film');
const Review = require('../models/review');

const express = require('express');
const filmRouter = new express.Router();

// SHOW
filmRouter.get('/:id', function(req, res) {
  const index = req.params.id;
  res.json({data: films[index]});
});

// UPDATE
filmRouter.put('/:id', function(req, res) {
  const index = req.params.id;
  films[index] = new Film(req.body);
  res.json({data: films});
});

// DELETE
filmRouter.delete('/:id', function(req, res) {
  const index = req.params.id;
  films.splice(index, 1);
  res.json({data: films});
});

// INDEX
filmRouter.get('/', function(req, res) {
  res.json({data: films});
});

// CREATE
filmRouter.post('/', function(req, res) {
  const newFilm = new Film(req.body);
  films.push(newFilm);
  res.json({data: films});
});

module.exports = filmRouter;
