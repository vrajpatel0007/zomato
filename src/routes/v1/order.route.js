const express = require("express")
const orderValidation = require("../../validations/order.validation")
const { orderController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create order  */
router.post(
    "/create-order",
    // validate(orderValidation.createorder),
    orderController.createorder
);

/**list order  */
router.get(
    "/list-order",
    // validate(orderValidation.getorder),
    orderController.getorder
);

/**delete order  */
router.delete(
    "/delete-order/:ID",
    orderController.deleteorder
);
/**update order  */
router.delete(
    "/update-order/:ID",
    orderController.updateorder
);

module.exports = router