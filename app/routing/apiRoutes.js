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
    var pushSwitch = true;
    for (var i = 0; i < friends.length; i++){
        if (newFriend.name !== friends[i].name){
            console.log(newFriend.name + " " + friends[0].name);
            scoreHolder.push(friends[i]);
        } else {
            pushSwitch = false;
        };
    };
    if(pushSwitch){
        friends.push(newFriend);
    };
    // console.log(scoreHolder);
    return res.json(friends);
    // return res.json(scoreHolder);
    // return res.json(newFriend);
});

module.exports = router;