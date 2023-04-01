const express = require("express");

const router = express.Router();

const { getMenu, createMenu } = require("../controllers/menu");

router.route("/api/menu").get(getMenu).post(createMenu);

router.route("/api/menu/:id").get(getMenu);

module.exports = router;
