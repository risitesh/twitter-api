const express = require('express');
const bodyParser = require('body-parser');
const wagner = require('wagner-core');
const swaggerUi = require('swagger-ui-express');
const expressValidator = require('express-validator');
const config = require('config');
const Twitter = require('twit');
// const swaggerDocument = require('./swagger.json');

const app = express();

const keys = {
  consumer_key: config.twitter.apiKey,
  consumer_secret: config.twitter.apiSecretKey,
  access_token: config.twitter.accessToken,
  access_token_secret: config.twitter.accessTokenSecret
};

const twit = new Twitter(keys);

wagner.factory('Twitter', () => twit);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

require('./controllers')(wagner);
require('./routes')(app, wagner);

module.exports = app;
