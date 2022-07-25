const {Schema} = require("mongoose");
const shortId = require("./type/shortId")

module.exports = new Schema({
    shortId,
    title: String,
    content:String,
    auth:{
        type:Schema.Types.ObjectId,
        ref:"User",
        require: true
    }
}, {
    timestamps: true
});