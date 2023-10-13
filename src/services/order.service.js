const { order } = require("../models");

/**
 * create order
 * @param {object} reqBody
 * @returns {Promise<order>}
 */
const createorder = async (reqBody) => {
    return order.create(reqBody)
};


/**list order  */
const getorder = async () => {
    return order.find()
}

/**delete order  */
const deleteorder = async (Id) => {
    return order.findByIdAndDelete(Id)
}

/**get by id  */
const getorderById = async (Id) => {
    return order.findById(Id)
}

/**update order   */
const update = async (Id, updateBody) => {
    return order.findByIdAndUpdate(Id, { $set: updateBody })
}



module.exports = {
    createorder,
    getorder,
    deleteorder,
    getorderById,
    update
}