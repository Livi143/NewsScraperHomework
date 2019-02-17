var express = require("express");
var mongoose = require("mongoose");
var PORT = 8080 || process.env.PORT;
var app = express();
var routes = require("./controllers/scraperController");
var exphbs = require("express-handlebars");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";


// config server to take certain kinds of data and server folders
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);

mongoose.connect(MONGODB_URI);

app.listen(PORT, function(){
    console.log("app is running on port 8080");
});

