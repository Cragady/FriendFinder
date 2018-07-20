//a GET route with the url /api/friends used to display
//json*/
//a POST route /api/friends this will handle survey results 
//this route will also be used to handle compatibility logic

var express = require("express"),
    friends = require("../data/friends"),
    router = express.Router(),
    bodyParser = require("body-parser")
;


router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get("/api/friends", function(req, res){
    var choiced = res.body;
    return res.json(friends);
});

router.post("/api/friends", function(req, res){
    var newFriend = req.body;
    var scoreHolder = [];
    if(!friends.includes(newFriend)){
        friends.push(newFriend);
    }
        for (var i = 0; i < friends.length; i++){
            if (newFriend !== friends[i]){
                scoreHolder.push(friends[i]);
            };
        };
    console.log(scoreHolder);
    return res.json(friends);
    return res.json(scoreHolder);
    return res.json(newFriend);
});

module.exports = router;