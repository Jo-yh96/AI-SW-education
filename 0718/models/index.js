const mongoose = require("mongoose")
const PostSchema = require("./schemas/board")

exports.Post1 = mongoose.model("Post", PostSchema);