const router = require("express").Router();

const Essentials = require("./essentials-model.js");

// GET essentials
router.get("/", (req, res) => {
  Essentials.find()
    .then((essentials) => {
      res.json(essentials);
    })
    .catch((err) => res.send(err));
});

// ADD essentials
router.post("/", (req, res) => {
  Essentials.addEssentials(req.body)
    .then((essential) => {
      res.status(201).json(essential);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
