//a GET route with the url /api/friends used to display
//json*/
//a POST route /api/friends this will handle survey results 
//this route will also be used to handle compatibility logic

var express = require("express"),
    router = express.Router(),
    bodyParser = require("body-parser")
;

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());