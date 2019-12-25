const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('Users Page');
    res.send('<h1>This is users page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Root');
    res.send('<h1>This is the root page</h1>');
});



app.listen(3001);