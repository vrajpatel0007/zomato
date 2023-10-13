const { Delivery } = require("../models");

/**
 * create Delivery
 * @param {object} reqBody
 * @returns {Promise<Delivery>}
 */
const createDelivery = async (reqBody) => {
    return Delivery.create(reqBody)
};


/**list Delivery  */
const getDelivery = async () => {
    return Delivery.find()
}

/**delete Delivery  */
const deleteDelivery = async (Id) => {
    return Delivery.findByIdAndDelete(Id)
}

/**get by id  */
const getDeliveryById = async (Id) => {
    return Delivery.findById(Id)
}

/**update Delivery   */
const update = async (Id, updateBody) => {
    return Delivery.findByIdAndUpdate(Id, { $set: updateBody })
}



module.exports = {
    createDelivery,
    getDelivery,
    deleteDelivery,
    getDeliveryById,
    update
}