var express = require('express');
var app = express();

app.use(express.static('public/v2.0.0'))

app.listen(3002);
