# Heroku Hacks

This project contains a bunch of things I am testing out on [Heroku](http://heroku.com).

# Setup

Add an environment variable for the [statsd](https://github.com/etsy/statsd) you would like to use.

```
heroku config:set STATSD_SERVER=ec2-X-X-X-X.compute-1.amazonaws.com
```

# Monitoring

This project illustrates how to use the [node-statsd-client](https://github.com/msiebuhr/node-statsd-client) library to
emit various metrics from a node app, these are subsequently graphed with [Graphite](http://graphite.wikidot.com) and
[Librato Metrics](https://metrics.librato.com/).

In my case I have an ec2 instance hosted in US East which hosts statsd, rsyslogd and Graphite, this acts as a receiver
for statsd and syslog messages from my application hosted in Heroku.