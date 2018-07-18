var express = require("express"),
    app = express(),
    htmlRoutes = require("./app/routing/htmlRoutes"),
    PORT =  process.env.PORT || 3000
;

app.use("/", htmlRoutes);

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});