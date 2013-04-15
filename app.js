
var express = require('express');
var env = require('./lib/env');
var routes = require('./lib/routes');

var app = express();

// Global Configuration
app.configure(function(){

  app.set('views', __dirname + '/views')
  app.set('view engine', 'jade')
  app.set('view options', { layout: false })
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(express.static(__dirname + '/public'))
  app.use(express.compress())

  app.use(app.router)

})

routes(app, env);

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});