const { State } = require("../models");

/**
 * create State
 * @param {object} reqBody
 * @returns {Promise<State>}
 */
const createState = async (reqBody) => {
    return State.create(reqBody)
};


/**list State  */
const getState = async () => {
    return State.find()
}

/**delete State  */
const deleteState = async (Id) => {
    return State.findByIdAndDelete(Id)
}

/**get by id  */
const getStateById = async (Id) => {
    return State.findById(Id)
}

/**update State   */
const update = async (Id, updateBody) => {
    return State.findByIdAndUpdate(Id, { $set: updateBody })
}



module.exports = {
    createState,
    getState,
    deleteState,
    getStateById,
    update
}