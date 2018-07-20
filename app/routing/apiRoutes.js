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

router.get("/api/friends/:friend", function(req, res){
    var choiced = req.params.friend;
    for (var i = 0; i < friends.length; i++){
        if (choiced === friends[i].name){
            return res.json(friends[i]);
        }
    };
    return res.json(friends);
});

router.post("/api/friends", function(req, res){
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    friends.push(newFriend);
});

module.exports = router;