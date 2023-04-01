const express = require("express");

const router = express.Router();

const { filterBanquet, bookedMenu } = require("../controllers/book");

router.route("/api/filterBanquet").post(filterBanquet);

router.route("/api/bookedMenu").post(bookedMenu);

module.exports = router;
