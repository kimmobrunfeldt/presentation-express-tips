var createApp = require('./app').createApp;

describe('API', function() {
    var server;

    before(function(done) {
        var app = createApp();
        server = app.listen(process.env.TEST_PORT, done);
    });

    after(function(done) {
        server.close(done);
    });

    beforeEach(function(done) {
        // Reset database
    });

    testResourceX();
});
