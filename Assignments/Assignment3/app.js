const path = require('path');

const express = require('express');

const app = express();

const mainRouter = require('./routers/main.js');
const usersRouter = require('./routers/users.js');

app.use(express.static(path.join(__dirname, 'views')));

app.use(mainRouter);
app.use(usersRouter);

app.listen(3001);