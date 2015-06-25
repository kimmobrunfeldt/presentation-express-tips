var xService = require('../services/x-service');

// Handles /api/v1/x-resources/:id
function getResource(req, res, next) {
    var resourceId = Number(req.id);

    xService.getResource(resourceId)
    .then(function(data) {
        return res.json(data);
    })
    .catch(next);
}