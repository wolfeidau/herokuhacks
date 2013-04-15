var nconf = require('nconf'),
  path = require('path');

nconf.argv().env().file({
  file: path.join('config', 'env.json')
});

var overridingConfig = nconf.get('defaults');

if (overridingConfig !== undefined) {
  nconf.file(overridingConfig);
  console.log('Found a config file to override anything in config/default.json');
}

var env = process.env.NODE_ENV || 'development',
  envConf = nconf.get(env);

for (var key in envConf) {
  if (envConf.hasOwnProperty(key)) {
    exports[key] = envConf[key];
  }
}

