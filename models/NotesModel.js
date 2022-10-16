const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

//define schema
const noteSchema = mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: {
        type: String,
        enum: ["High", "Medium", "Low"],
        default: "Low"
    },
    dateAdded: Date,
    dateUpdated: Date
})

//creating model from schema
module.exports = mongoose.model("note", noteSchema)