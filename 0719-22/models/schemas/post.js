const {Schema} = require("mongoose");
const shortId = require("./type/shortId")

module.exports = new Schema({
    shortId,
    title: String,
    content:String,
}, {
    timestamps: true
});