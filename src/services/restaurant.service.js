const { restaurant } = require("../models");

/**
 * create restaurant
 * @param {object} reqBody
 * @returns {Promise<restaurant>}
 */
const createrestaurant = async (reqBody) => {
    return restaurant.create(reqBody)
};


/**list restaurant  */
const getrestaurant = async () => {
    return restaurant.find()
}

/**delete restaurant  */
const deleterestaurant = async (Id) => {
    return restaurant.findByIdAndDelete(Id)
}

/**get by id  */
const getrestaurantById = async (Id) => {
    return restaurant.findById(Id)
}

/**update restaurant   */
const update = async (Id, updateBody) => {
    return restaurant.findByIdAndUpdate(Id, { $set: updateBody })
}



module.exports = {
    createrestaurant,
    getrestaurant,
    deleterestaurant,
    getrestaurantById,
    update
}