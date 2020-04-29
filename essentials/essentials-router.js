const router = require("express").Router();

const Essentials = require("./essentials-model.js");

// GET essentials
router.get("/", (req, res) => {
  console.log(req.decodedToken.userId);
  Essentials.findById(req.decodedToken.userId)
    .then((essentials) => {
      res.json(essentials);
    })
    .catch((err) => res.send(err));
});

// ADD essentials
router.post("/", (req, res) => {
  console.log(req.decodedToken.userId);
  const insert = { user_id: req.decodedToken.userId, name: req.body.name };
  Essentials.addEssentials(insert)
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
