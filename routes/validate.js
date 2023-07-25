const express = require("express");
const { getvalidation } = require("../controller/validator");

const router = express.Router();

router.route("/validator_data").get(getvalidation);

module.exports = router;
