const express = require("express");
const { setClient, inscription } = require("../controllers/home.controller");
const router = express.Router();

router.post("/", inscription);


module.exports = router;
