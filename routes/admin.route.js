const express = require("express");
const { show, update, reset } = require("../controllers/admin.controller");
const router = express.Router();


router.get("/", show);
router.post("/reset", reset);
router.post("/update", update);


module.exports = router;

