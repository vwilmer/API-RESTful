var express   = require('express'),
    mongoose  = require('mongoose');
var config = require('./server/configure');

var app = express();
app = config(app);

mongoose.connect('mongodb://localhost/base-de-datos', function (err) {
  if(!err) {
    console.log('Conexion a la BD realizada ');
  }
    else {
      console.log('ERROR ' + err);
    }
});

const PUERTO = 2000;

app.listen(PUERTO, function () {
  console.log('Servidor corriendo en el puerto ' + PUERTO);
});
