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
    var newFriend = req.body,
        scoreConcat = [],
        pushSwitch = true,
        newScore = req["body"]["scores"].map(a => {return parseFloat(a, 10)}),
        lowest = "";
    ;
    for (var i = 0; i < friends.length; i++){
        if (newFriend.name !== friends[i].name){
            var scoreDiff = newScore.map(function(item, index){
                var scoreHolder = item - friends[i]["scores"][index];
                if(scoreHolder < 0 ){
                    scoreHolder *= -1;
                };
                return scoreHolder;
            });

            var scorenate = scoreDiff.reduce((a, b) => a + b, 0);
            scoreConcat.push({ind: i, diff: scorenate});
            console.log(scoreConcat[i].ind + " " + scoreConcat[i].diff);            
            if(i === 0){ lowest = scoreConcat[i].diff; };
            var objex = scoreConcat.findIndex(x => x.diff === lowest);
            if(scoreConcat[i].diff <= lowest){
                lowest = scoreConcat[i].diff;
                console.log("changed!!");
            }; 
            if(i === friends.length - 1){ lowest = objex; console.log("lowest = " + lowest)};
            //use if diff < new diff, lowest = new diff
            console.log(lowest);
            console.log(objex);

        } else {
            pushSwitch = false;
        };
    };
    console.log(scoreConcat);
    if(pushSwitch){
        friends.push(newFriend);
    };
    var iteratorHopping = scoreConcat[lowest].ind;
    return res.json(friends[iteratorHopping]);
    // return res.json(newFriend);
});

module.exports = router;