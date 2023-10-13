const { coadminService } = require("../services")
/**create coadmin  */
const createcoadmin = async (req, res) => {
    try {
        const reqBody = req.body;


        const coadmin = await coadminService.createcoadmin(reqBody);
        if (!coadmin) {
            throw new Error("coadmin  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("coadmin  create successfully!"),
            data: { coadmin }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list coadmin  */
const getcoadmin = async (req, res) => {
    try {
        const reqBody = req.body;
        const coadmin = await coadminService.getcoadmin(reqBody);
        if (!coadmin) {
            throw new Error("coadmin  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("coadmin  list successfully!"),
            data: { coadmin }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete coadmin  */
const deletecoadmin = async (req, res) => {
    try {
        const id = req.params.Id;
        const coadminEx = await coadminService.getcoadmin();
        if (!coadminEx) {
            throw new Error("coadmin  not found!")
        }
        const coadmin = await coadminService.deletecoadmin(id)
        res.status(200).json({
            success: true,
            message: ("coadmin  delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

/**update coadmin  */
const updatecoadmin = async (req, res) => {
    try {
        const id = req.params.Id;
        const coadminEx = await coadminService.getcoadminById();
        if (!coadminEx) {
            throw new Error("coadmin  not found!")
        }
        const coadmin = await coadminService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("coadmin  update successfully!"),
            data: coadmin
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createcoadmin,
    getcoadmin,
    deletecoadmin,
    updatecoadmin
}