const router = require("express").Router();
const db = require("../models");

router.get("/books", (req, res) => {
  db.Book.find({
  })
    .then(books => res.json(books))
    .catch(err => res.status(422).end());
});

router.post("/books", (req, res) => {
  console.log(req.body)
  db.Book.create(req.body).then((err) =>
  {
    if (err)
    {
      res.send(err);
    }else
    {
      res.send("sucess!!!")
    }

  })
});

router.delete("/books/:id", (req, res) => {
  console.log(req.params.id)
  db.Book.deleteOne({_id: req.params.id}, (err) =>
    {
      if (err)
      {
        res.send(err);
      }else
      {
        res.send("sucess! book with id " + req.params.id + " was deleted.");
      }
    })

});

module.exports = router;
