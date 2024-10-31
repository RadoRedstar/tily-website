const express = require("express");
const { setClient } = require("../controllers/post.controller");
const router = express.Router();



router.put('/:id', (req, res) => {
    res.json({messageId: req.params.id });
});

router.delete('/:id', (req, res) => {
    res.json({message: "Supprimé: id = " + req.params.id});
});

module.exports = router;
