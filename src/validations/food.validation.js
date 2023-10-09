const Joi = require("joi")

/**create food gallery */
const createFood = {
    body: Joi.object().keys({
        food_name: Joi.string().required().trim(),
        food_image: Joi.string().allow("").trim(),
        food_desc: Joi.string().required().trim(),
        food_tayps: Joi.string().required().trim(),
        food_price: Joi.string().required().trim(),
        cooking_time: Joi.string().required().trim(),
    })
}

/**list food gallery */
const getFood = {
    query: Joi.object().keys({
        food_name: Joi.string().required().trim(),
        food_image: Joi.string().allow("").trim(),
        food_desc: Joi.string().required().trim(),
        food_tayps: Joi.string().required().trim(),
        food_price: Joi.string().required().trim(),
        cooking_time: Joi.string().required().trim(),
    })
}

module.exports = {
    createFood,
    getFood,
}