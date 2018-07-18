//GET Route to /survey *displays survey page*
// var express = require("express"),
//     router = express.Router(),
//     path = require("path");

// console.log("hi");
// console.log("Yo");
module.exports = function(app){

    app.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now());
        next();
      });

    app.get("/", function(req, res){
        res.send(path.join(__dirname, "/app/public/home.html"));
    });
    
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "/app/public/survey.html"));
    });

};