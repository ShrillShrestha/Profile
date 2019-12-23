var express = require("express");

require("dotenv").config();

var app = express();
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

var PORT = 3000 || process.env.PORT;

app.locals.fontId = process.env.fontawesome;

app.get("/", function(req, res){
    res.render("index");
});

app.get("/about", function(req, res){
    res.render("about");
})

app.listen(PORT, function(req, res){
    console.log("Running!!!");
});