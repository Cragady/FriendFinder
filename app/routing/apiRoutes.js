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
    var newFriend = req.body,
        scoreConcat = [],
        pushSwitch = true,
        newScore = req["body"]["scores"].map(a => {return parseFloat(a, 10)}),
        lowest = "",
        objex = "",
        randomizer = [];
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
            if(i === 0){ lowest = scoreConcat[i].diff; };
            objex = scoreConcat.findIndex(x => x.diff === lowest);

            if(scoreConcat[i].diff <= lowest){
                lowest = scoreConcat[i].diff;
                randomizer.push({ind2: i, lowStore: lowest});
            };
             
            if(i === friends.length - 1){ 
                if(randomizer.length > 1){
                    for(var rI = 0; rI < randomizer.length; rI++){
                        if(randomizer[rI].lowStore > lowest){
                            randomizer.splice(rI, 1);
                        };      
                    };
                    var randInd = Math.floor(Math.random() * randomizer.length);
                    objex = randomizer[randInd].ind2;
                };
                lowest = objex;
            };
        } else {

            pushSwitch = false;
            if(i === friends.length - 1){
                if(randomizer.length > 1){
                    for(var rI = 0; rI < randomizer.length; rI++){
                        if(randomizer[rI].lowStore > lowest){
                            randomizer.splice(rI, 1);
                        };      
                    };
                    var randInd = Math.floor(Math.random() * randomizer.length);
                    objex = randomizer[randInd].ind2;
                }; 
                lowest = objex;
            };
        };
    };

    if(pushSwitch){
        friends.push(newFriend);
    };
    var iteratorHopping = scoreConcat[lowest].ind;
    return res.json(friends[iteratorHopping]);
});

module.exports = router;