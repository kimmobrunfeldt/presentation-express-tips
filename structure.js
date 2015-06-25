var app = require('express')();

// Setup all basic middlewares:
// - log incoming requests
// - authentication (e.g. passport)
// - bodyparser
// - compression

var routes = require('./routes');
routes.initRoutes(app);

// Setup error middlewares:
// - Log errors, e.g. papertrail
// - Respond errors, use expressjs/errorhandler

app.listen(3000);