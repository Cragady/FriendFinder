// GET Route to /survey *displays survey page*
var express = require("express"),
    router = express.Router(),
    path = require("path");

    router.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    router.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

module.exports = router;