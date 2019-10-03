const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const app = express();

app.use(cors());

require('./database/connection');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./src/middleware/passport')(passport);

require('./src/routes/index')(app);

module.exports = app;
