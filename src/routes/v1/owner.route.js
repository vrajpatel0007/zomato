const express = require("express")
const { ownerVallidation } = require("../../validations")
const { ownerController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create-owner  */
router.post(
    "/create-owner",
    validate(ownerVallidation.createOwner),
    ownerController.createOwner
);

/**list-owner  */
router.get(
    "/list-owner",
    validate(ownerVallidation.getOwner),
    ownerController.getOwner
);

/**delete-owner  */
router.delete(
    "/delete-owner/:ID",
    ownerController.deleteOwner
);
/**update-owner  */
router.delete(
    "/update-owner/:ID",
    ownerController.updateOwner
);

module.exports = router