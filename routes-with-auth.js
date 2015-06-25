var xController = require('./controllers/x-controller');
var yController = require('./controllers/y-controller');
var authService = require('./services/auth-service');

function initRoutes(app) {
    // X routes
    app.get(
        '/api/v1/x-resources',
        authService.requireRole(['user']),
        xController.getResources
    );
    app.get(
        '/api/v1/x-resources/:id',
        authService.requireRole(['user']),
        xController.getResource
    );

    // Y routes
    app.post(
        '/api/v1/y-resources',
        authService.requireRole(['admin']),
        yController.postResource
    );
}

module.exports = {
    initRoutes: initRoutes
};
