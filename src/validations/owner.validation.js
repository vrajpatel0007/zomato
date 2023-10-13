const Joi = require("joi")

/**create owner  */
const createOwner = {
    body: Joi.object().keys({
        owner_name: Joi.string().required().trim(),
        Number: Joi.number().integer(),
        email: Joi.string().required().trim(),
        restaurant_name: Joi.string().required(),
    })
}

/**list owner  */
const getOwner = {
    query: Joi.object().keys({
        owner_name: Joi.string().allow("").trim(),
        Number: Joi.number().integer(),
        email: Joi.string().allow("").trim(),
        restaurant_name: Joi.string().allow(""),
    })
}

module.exports = {
    createOwner,
    getOwner,
}