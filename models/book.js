const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    authors: {
        type: Array,
        required: true
    },
    description: {
        type: String,
    },
    img: {
        type: URL,
    },
    link: {
        type: URL,
        required: true
    }
});
  
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
