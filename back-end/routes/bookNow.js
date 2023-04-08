const express = require("express");

const router = express.Router();

const { createBookNow } = require("../controllers/bookNow");

router.route("/api/createBookNow").post(createBookNow);

module.exports = router;
