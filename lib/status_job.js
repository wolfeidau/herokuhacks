var os = require('os');

module.exports = function(sdc, prefix){
  setInterval(function(){
    var load = os.loadavg();
    var memory = process.memoryUsage();
    var cpus = os.cpus();

    sdc.gauge(prefix + '.load.long', load.pop());
    sdc.gauge(prefix + '.load.medium', load.pop());
    sdc.gauge(prefix + '.load.short', load.pop());
    sdc.gauge(prefix + '.process.rss', memory.rss);
    sdc.gauge(prefix + '.process.heapTotal', memory.heapTotal);
    sdc.gauge(prefix + '.process.heapUsed', memory.heapUsed);
    sdc.gauge(prefix + '.cpus', cpus.length);

//    cpus.forEach(function(cpu){
//       
//    });
  }, 10000);
}
