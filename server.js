const express = require('express');
var path = require("path");
const app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
app.get('/', function (req, res) {
  res.send('Hello World - The server is working!!')
})
 
app.listen(PORT, function() {
    console.log("App listening on PORT: "+ PORT);
});

