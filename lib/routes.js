var pkgInfo = require('../package.json');

module.exports = function(app, conf){

  // index
  app.get('/', function(req, res) {
    res.render('index', { title: 'herokudev', version: pkgInfo.version });
  });

  app.get('/about', function(req, res) {
    res.render('about', { title: 'herokudev', version: pkgInfo.version });
  });

};