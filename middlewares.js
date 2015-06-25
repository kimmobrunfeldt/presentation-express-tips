var app = require('express')();

app.use(require('body-parser').json())

app.get('/', function(req, res) {
    // req.body.toString() === [object Object]
    res.send('Hello World');
});

app.listen(3000);