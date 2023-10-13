const express = require("express")
const cityValidation = require("../../validations/city.validation")
const { cityController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create city  */
router.post(
    "/create-city",
    validate(cityValidation.createcity),
    cityController.createcity
);

/**list city  */
router.get(
    "/list-city",
    validate(cityValidation.getcity),
    cityController.getcity
);

/**delete city  */
router.delete(
    "/delete-city/:ID",
    cityController.deletecity
);
/**update city  */
router.delete(
    "/update-city/:ID",
    cityController.updatecity
);

module.exports = router