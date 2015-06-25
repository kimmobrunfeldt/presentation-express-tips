var app = require('express')();

app.get('/slow', function (req, res, next) {
    for (var i = 0; i < Math.pow(10, 9); ++i) {
        // blocking the event loop
    }

    res.json({success: true});
});

app.get('/fast', function (req, res, next) {
    res.json({success: true});
});

var server = app.listen(3000);
