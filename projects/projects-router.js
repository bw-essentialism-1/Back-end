const router = require("express").Router();

const Projects = require("./projects-model.js");

// GET projects
router.get("/", (req, res) => {
  Projects.findById(req.decodedToken.userId)
    .then((project) => {
      res.json(project);
    })
    .catch((err) => res.send(err));
});

// ADD projects
router.post("/", (req, res) => {
  const insert = { user_id: req.decodedToken.userId, name: req.body.name };
  Projects.addProjects(insert)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
});

// REMOVE projects
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await Projects.removeProjects(id)
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
