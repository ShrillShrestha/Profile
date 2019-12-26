var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String
});

module.exports = mongoose.model("Project", projectSchema);