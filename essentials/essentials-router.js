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

// REMOVE Essentials
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
// update here
  await Essentials.removeEssentials(id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
