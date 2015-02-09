var express = require('express');

var env = process.env.NODE_ENV ;

var app = express();

var config = require('./server/config/config');

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routs')(app);

app.listen(config.port);

console.log('Server is runing on port: ' + config.port);
