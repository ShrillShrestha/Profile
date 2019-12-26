var express = require("express"),
    mongoose = require("mongoose"),
    fs = require("fs"),
    about = require("./routes/about"),
    blogs = require("./routes/blogs"),
    contact = require("./routes/contact"),
    projects = require("./routes/projects"),
    updateInfo = require("./routes/updateInfo");

require("dotenv").config();

var app = express();
mongoose.connect("mongodb://localhost/profile", {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

var PORT = 3000 || process.env.PORT;

app.locals.fontId = process.env.fontawesome;

app.use("/about", about);
app.use("/blogs", blogs);
app.use("/contact", contact);
app.use("/projects", projects);

app.get("/", function(req, res){
    res.render("pages/index");
});

app.listen(PORT, function(req, res){
    console.log("Running!!!");
});