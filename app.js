require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/public/"));

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/public/index.html");
});

module.exports = app;
