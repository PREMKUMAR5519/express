const mongoose =require("mongoose")
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String
});

const book = mongoose.model("book", bookSchema)

module.exports= book