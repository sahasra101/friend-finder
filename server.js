const express = require('express');
var path = require("path");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000);

