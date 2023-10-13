const express = require("express")
const countryValidation = require("../../validations/country.validation")
const { countryController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create country  */
router.post(
    "/create-country",
    validate(countryValidation.createcountry),
    countryController.createcountry
);

/**list country  */
router.get(
    "/list-country",
    validate(countryValidation.getcountry),
    countryController.getcountry
);

/**delete country  */
router.delete(
    "/delete-country/:ID",
    countryController.deletecountry
);
/**update country  */
router.delete(
    "/update-country/:ID",
    countryController.updatecountry
);

module.exports = router