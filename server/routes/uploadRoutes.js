const express = require('express');
const router = express.Router();
const { setItemImage } = require("../controllers/uploadController");

router.post("/setItemImage", setItemImage);

module.exports = router;
