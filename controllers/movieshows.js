var mongoose = require('mongoose');
var Pelicula = require('../models/movie');

module.exports = {
  findAllMovies: function (req, res) {
    Pelicula.find(function (err, movies) {
      if (err) {
        res.status(500);
        res.send(err.message);
      }
      res.status(200);
      res.json({
        json: movies,
        mensaje: 'Lista de Peliculas'
      });
    });
  },
  findMovieById: function (req, res) {
    Pelicula.findById(req.params.idMovie, function (err, movie) {
      if (err) {
        res.status(500);
        res.send(err.message);
      }
      res.status(200);
      res.json({
        json: movie,
        mensaje: ' Una pelicula fue encontrada con es ID'
      });
    });
  },
  addMovie: function (req, res) {
    var pelicula = new Pelicula({
      titulo  : req.body.title,
      director: req.body.director,
      anio    : req.body.year,
      ranking : req.body.rating
    });

    pelicula.save(function (err, movie) {
      if (err) {
        res.status(500);
        res.send(err.message);
      }
      res.status(200);
      res.json({
        json: movie,
        mensaje: ' Una pelicula fue aniadida'
      });
    });
  },
  updateMovieById: function (req, res) {
    Pelicula.findById(req.params.id, function (err, movie) {
      movie.titulo   = req.body.title;
      movie.director = req.body.director;
      movie.anio     = req.body.year;
      movie.ranking  = req.body.rating;

      movie.save(function (err, movie) {
        if (err) {
          res.status(500);
          res.send(err.message);
        }
        res.status(200);
        res.json({
          json: movie,
          mensaje: ' Una pelicula con ese ID fue actualizada'
        });
      });
    });
  },
  deleteMovieById: function (req, res) {
    Pelicula.findById(req.params.idPelicula, function (err, movie) {
      movie.remove(function (err) {
        if (err) {
          res.status(500);
          res.send(err.message);
        }
        res.status(200);
        res.json({
          mensaje: 'Pelicula con ese ID fue borrada'
        });
        res.end();
      });
    });
  }
};
