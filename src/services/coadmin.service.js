const { Coadmin } = require("../models");

/**
 * create Coadmin
 * @param {object} reqBody
 * @returns {Promise<Coadmin>}
 */
const createCoadmin = async (reqBody) => {
    return Coadmin.create(reqBody)
};

/**list Coadmin  */
const getCoadmin = async () => {
    return Coadmin.find()
}

/**delete Coadmin  */
const deleteCoadmin = async (Id) => {
    return Coadmin.findByIdAndDelete(Id)
}

/**get by id  */
const getCoadminById = async (Id) => {
    return Coadmin.findById(Id)
}

/**update Coadmin   */
const update = async (Id, updateBody) => {
    return Coadmin.findByIdAndUpdate(Id, { $set: updateBody })
}



module.exports = {
    createCoadmin,
    getCoadmin,
    deleteCoadmin,
    getCoadminById,
    update
}