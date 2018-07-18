var express = require("express"),
    app = express(),
    htmlRoutes = require("./app/routing/htmlRoutes"),
    apiRoutes = require("./app/routing/apiRoutes"),
    PORT =  process.env.PORT || 3000
;

app.use("/", htmlRoutes);
app.use("/", apiRoutes);

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});