const express = require("express")
const coadminValidation = require("../../validations/coadmin.validation")
const { coadminController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create coadmin  */
router.post(
    "/create-coadmin",
    validate(coadminValidation.createcoadmin),
    coadminController.createcoadmin
);

/**list coadmin  */
router.get(
    "/list-coadmin",
    validate(coadminValidation.getcoadmin),
    coadminController.getcoadmin
);

/**delete coadmin  */
router.delete(
    "/delete-coadmin/:ID",
    coadminController.deletecoadmin
);
/**update coadmin  */
router.delete(
    "/update-coadmin/:ID",
    coadminController.updatecoadmin
);

module.exports = router