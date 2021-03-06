
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , about = require('./routes/about')
  , nearbyTrails = require('./routes/nearby-trails')
  , trails = require('./routes/trails')
  , nearbyJSON = require('./routes/nearby-json')
  , http = require('http')
  , path = require('path')
  , map = require('./routes/map');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/about', about.index);
app.get('/nearby-trails', nearbyTrails.index);
app.get('/nearby-json', nearbyJSON.index);
app.get('/trails', trails.index);
app.get('/map', map.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});