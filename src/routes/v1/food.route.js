const express = require("express")
const foodValidation = require("../../validations/food.validation")
const { foodController } = require("../../controllers")
const validate = require("../../middlewares/validate");
const { upload } = require("../../middlewares/upload");

const router = express.Router();

/**create food  */
router.post(
    "/create-food",
    upload.single("food_imag"),
    validate(foodValidation.createFood),
    foodController.createFood
);

/**list food  */
router.get(
    "/list-food",
    validate(foodValidation.getFood),
    foodController.getFood
);

/**delete food  */
router.delete(
    "/delete-food/:ID",
    foodController.deleteFood
);
/**update food  */
router.delete(
    "/update-food/:ID",
    foodController.updateFood
);

module.exports = router