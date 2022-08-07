const {Schema} = require("mongoose");
const shortId = require("./type/shortId")

module.exports = new Schema({
    shortId,
    img: String,
    title: String,
    content:String,
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
        require: true
    }
}, {
    timestamps: true
});