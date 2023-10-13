const { Owner } = require("../models");

/**
 * create owner
 * @param {object} reqBody
 * @returns {Promise<Owner>}
 */
const createOwner = async (reqBody) => {
    return Owner.create(reqBody)
};

/**list owner  */
const getOwner = async () => {
    return Owner.find().populate("rest_detail", { rest_name: 1 })
}

/**delete owner  */
const deleteOwner = async (Id) => {
    return Owner.findByIdAndDelete(Id)
}

/**get by id  */
const getOwnerById = async (Id) => {
    return Owner.findById(Id)
}

/**update owner   */
const update = async (Id, updateBody) => {
    return Owner.findByIdAndUpdate(Id, { $set: updateBody })
}



module.exports = {
    createOwner,
    getOwner,
    deleteOwner,
    getOwnerById,
    update
}