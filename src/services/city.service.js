const { city } = require("../models");

/**
 * create city
 * @param {object} reqBody
 * @returns {Promise<city>}
 */
const createcity = async (reqBody) => {
    return city.create(reqBody)
};

/**list city  */
const getcity = async () => {
    return city.find().populate("state", { state_name: 1 })
}

/**delete city  */
const deletecity = async (Id) => {
    return city.findByIdAndDelete(Id)
}

/**get by id  */
const getcityById = async (Id) => {
    return city.findById(Id)
}

/**update city   */
const update = async (Id, updateBody) => {
    return city.findByIdAndUpdate(Id, { $set: updateBody })
}



module.exports = {
    createcity,
    getcity,
    deletecity,
    getcityById,
    update
}