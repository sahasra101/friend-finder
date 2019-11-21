var express = require('express');
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// app.get('/home', function (req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));
// })

// app.get('/survey', function (req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// })

app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

