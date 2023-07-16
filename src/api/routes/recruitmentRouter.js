const express = require("express");
const router = express.Router();
const recruitment = require("../controllers/RecruitmentController")

router.get('/', recruitment.findData);
router.get('/:id', recruitment.findDetail);

module.exports = router;