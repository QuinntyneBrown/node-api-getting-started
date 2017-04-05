import express = require('express');
import path = require('path');

import routes from './routes/index';

var app = express();

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

module.exports = app;
