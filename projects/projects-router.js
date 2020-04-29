const router = require("express").Router();

const Projects = require("./projects-model.js");

// GET projects
router.get("/", (req, res) => {
  Projects.find()
    .then((project) => {
      res.json(project);
    })
    .catch((err) => res.send(err));
});

// ADD projects
router.post("/", (req, res) => {
  Projects.addProjects(req.body)
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
