// GET Route to /survey *displays survey page*
var express = require("express"),
    router = express.Router(),
    path = require("path");

    router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now());
        next();
      });

    router.get("/", function(req, res){
        console.log("hit");
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    router.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

module.exports = router;