var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
  titulo  : String,
  director: String,
  anio    : Number,
  ranking : {type: Number, default: 5}
},
{
  collection: 'Pelicula'
});

module.exports = mongoose.model('Pelicula', MovieSchema);
