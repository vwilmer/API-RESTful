var methodOverride = require('method-override'),
    path           = require('path'),
    express        = require('express'),
    bodyParser     = require('body-parser'),
    errorHandler   = require('errorhandler');

var app = express();
var routes = require('./routes');

module.exports = function (app) {
  app.set('view engine', 'jade');

  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(methodOverride());

  if ('development' === app.get('env')) {
    app.use(errorHandler());
    console.log('DESARROLLO');
  }

  routes(app);

  return app;
};
