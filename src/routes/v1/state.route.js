const express = require("express")
const stateValidation = require("../../validations/state.validation")
const { stateController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create state  */
router.post(
    "/create-state",
    validate(stateValidation.createstate),
    stateController.createstate
);

/**list state  */
router.get(
    "/list-state",
    validate(stateValidation.getstate),
    stateController.getstate
);

/**delete state  */
router.delete(
    "/delete-state/:ID",
    stateController.deletestate
);
/**update state  */
router.delete(
    "/update-state/:ID",
    stateController.updatestate
);

module.exports = router