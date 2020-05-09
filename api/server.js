const express = require('express');
const app = express();

app.listen(3005,()=>console.log('Server Started'));
app.get('/abc', function (req, res) {
    console.log(req);
    res.send('Hello World');
 })