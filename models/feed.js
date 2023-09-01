const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FEED = new Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Feed = mongoose.model("Feed", FEED);

module.exports = Feed;