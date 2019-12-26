var express = require("express"),
    Project = require("../models/project"),
    router = express.Router();

router.get("/", function(req, res){
    Project.find({}, function(err, foundProjects){
        if(err){
            console.log(err);
        }else{
            res.render("pages/projects", {foundProjects: foundProjects});
        }
    });;
});

module.exports = router;