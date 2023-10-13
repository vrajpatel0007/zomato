const express = require("express")
const DeliveryValidation = require("../../validations/Delivery.validation")
const { DeliveryController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create Delivery  */
router.post(
    "/create-Delivery",
    validate(DeliveryValidation.createDelivery),
    DeliveryController.createDelivery
);

/**list Delivery  */
router.get(
    "/list-Delivery",
    validate(DeliveryValidation.getDelivery),
    DeliveryController.getDelivery
);

/**delete Delivery  */
router.delete(
    "/delete-Delivery/:ID",
    DeliveryController.deleteDelivery
);
/**update Delivery  */
router.delete(
    "/update-Delivery/:ID",
    DeliveryController.updateDelivery
);

module.exports = router