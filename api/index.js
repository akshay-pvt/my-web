const express = require('express');
const path = require('path');

const app = express();

app.disable('x-powered-by');

app.get ('/', (req, res)=> {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.user((req, res) => {
  res.status(403).send('umb');
});
module.exports = app;
