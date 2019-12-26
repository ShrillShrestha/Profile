var mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    url: String
});

module.exports = mongoose.model("Blog", blogSchema);