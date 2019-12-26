var express = require("express"),
    Blog = require("../models/blog"),
    router = express.Router();

router.get("/", function(req, res){
    Blog.find({}, function(err, foundBlogs){
        if(err){
            console.log(err);
        }else{
            res.render("pages/blogs", {foundBlogs: foundBlogs});
        }
    });
});

module.exports = router;