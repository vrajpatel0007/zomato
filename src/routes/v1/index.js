const express = require("express");
const userRoute = require("./user.rutes");
const foodRoute = require("./food.route");


const router = express.Router();

router.use("/user", userRoute);
router.use("/food", foodRoute);

module.exports = router;