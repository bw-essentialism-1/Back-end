const router = require("express").Router();

const Mission = require("./mission-model.js");

// GET mission
router.get("/", (req, res) => {
  Mission.find()
    .then((mission) => {
      res.json(mission);
    })
    .catch((err) => res.send(err));
});

// PUT mission
router.put("/", (req, res) => {
  Mission.updateMission(req.body)
    .then((mission) => {
      res.status(201).json(mission);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
