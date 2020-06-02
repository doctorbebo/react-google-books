const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://bebo:bebo92@ds119688.mlab.com:19688/heroku_js5xsb6j'
);

const bookSeed = [
    {
        title: "Chronicles of Byron",
        authors: ["Bebo Brown"],
        description: "The story of Byron during the dark times",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Byron_1813_by_Phillips.jpg",
        link: "https://en.wikipedia.org/wiki/Lord_Byron"
    }
];


db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
