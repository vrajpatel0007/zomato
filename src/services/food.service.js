const { Food } = require("../models")

/**
 * create food
 * @param {object} reqBody
 * @returns {Promise<Food>}
 */
const createFood = async (reqBody) => {
    return Food.create(reqBody)
};

/**list food  */
const getFood = async () => {
    return Food.find().populate("price", { price: 1 })
}

/**delete food  */
const deleteFood = async (Id) => {
    return Food.findByIdAndDelete(Id)
}

/**get by id  */
const getFoodById = async (Id) => {
    return Food.findById(Id)
}

/**update food   */
const updateDetails = async (Id, updateBody) => {
    return Food.findByIdAndUpdate(Id, { $set: updateBody })
}



module.exports = {
    createFood,
    getFood,
    deleteFood,
    getFoodById,
    updateDetails
}