
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((request, response, next) => {
    let now = new Date().toString();
    var log = `${now}: ${request.method} ${request.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err) { console.log('Unable to append to server log.'); }
    });
    next();
});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.get('/', (request, response) => {
    response.render('home.hbs', {
        pageTitle: 'Welcome',
        welcomeMessage: 'welcome to this place.'
    });
});

app.listen(port, host, () => {
    console.log(`Server is up on port ${port} @ ${host}`)
});