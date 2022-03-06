const express = require("express");
const router = express.Router();
const auth = require("./../../controllers/AuthController")

router.post("/", auth.login)

module.exports = router;