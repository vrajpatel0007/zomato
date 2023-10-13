const { stateService } = require("../services")
/**create state  */
const createstate = async (req, res) => {
    try {
        const reqBody = req.body;

        const state = await stateService.createstate(reqBody);
        if (!state) {
            throw new Error("state  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("state create successfully!"),
            data: { state }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list state  */
const getstate = async (req, res) => {
    try {
        const reqBody = req.body;
        const state = await stateService.getstate(reqBody);
        if (!state) {
            throw new Error("state  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("state  list successfully!"),
            data: { state }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete state  */
const deletestate = async (req, res) => {
    try {
        const id = req.params.Id;
        const stateEx = await stateService.getstate();
        if (!stateEx) {
            throw new Error("state  not found!")
        }
        const state = await stateService.deletestate(id)
        res.status(200).json({
            success: true,
            message: ("state  delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

/**update state  */
const updatestate = async (req, res) => {
    try {
        const id = req.params.Id;
        const stateEx = await stateService.getstateById();
        if (!stateEx) {
            throw new Error("state  not found!")
        }
        const state = await stateService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("state  update successfully!"),
            data: state
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createstate,
    getstate,
    deletestate,
    updatestate
}