'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://wesdoyle.auth0.com/.well-known/jwks.json"
  }),
  // This is the identifier we set when we created the API
  audience: 'http://pd-demo-api.com',
  issuer: "https://wesdoyle.auth0.com/",
  algorithms: ['RS256']
});

app.get('/api/public-notes', (req, res) => {
  let notes = [
    { id: 1, note: 'Return library books', },
    { id: 2, note: 'Meditate', },
    { id: 3, note: 'Run backups', },
    { id: 4, note: 'Grocery shopping', }
  ];
  res.json(notes);
})

app.get('/api/private-notes', authCheck, (req,res) => {
  let notes = [
    { id: 4, note: 'Plan hiking trip', },
    { id: 5, note: 'Practice chess', },
    { id: 6, note: 'Practice pottery', },
  ];
  res.json(notes);
})

app.listen(8000);
console.log('Listening on localhost:8000');
