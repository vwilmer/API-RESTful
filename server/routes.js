var express = require('express');
var router = express.Router();
var rutaHome = require('../controllers/home');
var rutaMovies = require('../controllers/movieshows');

module.exports = function (app) {
  router.get('/', rutaHome.index);
  router.get('/peliculas', rutaMovies.findAllMovies);
  router.get('/peliculas/:idMovie', rutaMovies.findMovieById);
  router.post('/peliculas', rutaMovies.addMovie);
  router.put('/peliculas/:id', rutaMovies.updateMovieById);
  router.delete('/peliculas/:idPelicula', rutaMovies.deleteMovieById);
  app.use(router);
};
