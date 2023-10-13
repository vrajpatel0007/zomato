const express = require("express")
const restaurantValidation = require("../../validations/restaurant.validation")
const { restaurantController } = require("../../controllers")
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create restaurant  */
router.post(
    "/create-restaurant",
    validate(restaurantValidation.createrestaurant),
    restaurantController.createrestaurant
);

/**list restaurant  */
router.get(
    "/list-restaurant",
    validate(restaurantValidation.getrestaurant),
    restaurantController.getrestaurant
);

/**delete restaurant  */
router.delete(
    "/delete-restaurant/:ID",
    restaurantController.deleterestaurant
);
/**update restaurant  */
router.delete(
    "/update-restaurant/:ID",
    restaurantController.updaterestaurant
);

module.exports = router