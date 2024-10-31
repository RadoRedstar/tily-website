const express = require("express");
const { setClient } = require("../controllers/home.controller");
const Info = require("../models/info.model"); 
const router = express.Router();


router.get("/", async (req, res) => {
    try {
        const infos = await Info.find(); // Récupère toutes les informations depuis la collection "info"
        res.render("index", { infos }); // Passe les données à "index.ejs"
    } catch (error) {
        res.status(500).send(error.message);
    }
});


module.exports = router;
