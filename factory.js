function createApp() {
    var app = require('express')();

    // Setup all basic middlewares:

    var routes = require('./routes');
    routes.initRoutes(app);

    // Setup error middlewares:

    return app;
}

module.exports = {
    createApp: createApp
};