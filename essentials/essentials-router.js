const router = require('express').Router();

const Essentials = require("./essentials-model.js");

router.get("/", (req, res) => {
    Essentials.find()
        .then(essentials => {
            res.json(essentials);
        })
        .catch(err => res.send(err));
})

module.exports = router;