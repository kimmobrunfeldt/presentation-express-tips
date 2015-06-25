var Joi = require('joi');
var X = require('../models/x-model');
var assert = require('./service-utils').assert;

function getResource(resourceId) {
    // Just an example Joi type.
    // Types could help, better ideas?
    assert(resourceId, Joi.integer());

    return X
    .forge({id: resourceId)
    .fetch()
    .then(function(model) {
        if (!model) {
            var err = new Error('Resource does not exist');
            err.status = 404;
            throw err;
        }

        return model.toJSON();
    });
}