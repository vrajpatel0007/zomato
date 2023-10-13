const { country } = require("../models");

/**
 * create country
 * @param {object} reqBody
 * @returns {Promise<country>}
 */
const createcountry = async (reqBody) => {
    return country.create(reqBody)
};

/**list country  */
const getcountry = async () => {
    return country.find()
}

/**delete country  */
const deletecountry = async (Id) => {
    return country.findByIdAndDelete(Id)
}

/**get by id  */
const getcountryById = async (Id) => {
    return country.findById(Id)
}

/**update country   */
const update = async (Id, updateBody) => {
    return country.findByIdAndUpdate(Id, { $set: updateBody })
}



module.exports = {
    createcountry,
    getcountry,
    deletecountry,
    getcountryById,
    update
}