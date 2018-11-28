const express = require('express');

var app = express();

app.get('/', (request, response) => {
    response.send('hellow');
})

app.listen(3000);