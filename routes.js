var controllerX = require('./controllers/x-controller');
var controllerY = require('./controllers/y-controller');

function initRoutes(app) {
    // X routes
    app.get(
        '/api/v1/x-resources',
        controllerX.getResources
    );
    app.get(
        '/api/v1/x-resources/:id',
        controllerX.getResource
    );

    // Y routes
    app.post(
        '/api/v1/y-resources',
        controllerY.postResource
    );
}

module.exports = {
    initRoutes: initRoutes
};
