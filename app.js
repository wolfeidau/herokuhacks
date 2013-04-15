
var express = require('express');
var conf = require('./lib/env');
var routes = require('./lib/routes');
var StatsDClient = require('statsd-client');
var sdc = new StatsDClient({host: conf.get('STATSD_SERVER'), port: 8125, debug: false});
var statusJob = require('./lib/status_job');

var app = express();
var prefix = 'herokudev';


app.use(sdc.helpers.getExpressMiddleware(prefix, { timeByUrl: true }));

// Global Setup
app.configure(function(){

  app.disable('x-powered-by');
  app.use(express.compress());

  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', { layout: false });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public', {maxAge: 86400000}));

  app.use(app.router);

});


statusJob(sdc, prefix);

routes(app, conf);

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});