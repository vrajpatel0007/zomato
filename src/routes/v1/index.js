const express = require("express");
const userRoute = require("./user.rutes");
const foodRoute = require("./food.route");
const ownerRoute = require("./owner.route");
const cityRoute = require("./city.route");
const orderRoute = require("./order.route");


const router = express.Router();

router.use("/user", userRoute);
router.use("/food", foodRoute);
router.use("/owner", ownerRoute);
router.use("/city", cityRoute);
router.use("/order", orderRoute);

module.exports = router;