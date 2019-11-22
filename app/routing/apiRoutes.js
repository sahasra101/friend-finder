var path = require("path");

var friends = require("../data/friends.js");


module.exports = function (app) {
    var match;
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    
    app.post("/api/friends", function (req, res) {

        function compScores(arr1, arr2) {
            var tempScore = 0;
            for (var i = 0; i < 10; i++) {
                tempScore += Math.abs(parseInt(arr1[i]) - parseInt(arr2[i]));
            }
            return tempScore;
        }
        var closestMatch = 40;
        for (var i = 0; i < friends.length; i++) {
            tempScore = compScores(req.body.scores, friends[i].scores)
            if (tempScore < closestMatch) {
                // this is the new match
                closestMatch = tempScore;
                matchedindex = i;
            }
        }
        console.log(closestMatch);
        console.log(friends[matchedindex].name);
        console.log(friends[matchedindex].photo);
        match = {
            name:friends[matchedindex].name,
            photo:friends[matchedindex].photo
        }
        // res.json(match);
        
      

        friends.push(req.body);

    });

    app.get("/api/match", function (req, res) {
        res.json(match);

    });

};