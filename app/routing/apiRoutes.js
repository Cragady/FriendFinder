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
    return res.json(friends);
});

router.post("/api/friends", function(req, res){
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    friends.push(newFriend);
    console.log(newFriend.scores);
});

module.exports = router;