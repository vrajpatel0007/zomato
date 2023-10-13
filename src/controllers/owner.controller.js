const { ownerService } = require("../services")
/**create owner  */
const createOwner = async (req, res) => {
    try {
        const reqBody = req.body;
        const owner = await ownerService.createOwner(reqBody);
        if (!owner) {
            throw new Error("Owner  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("owner create successfully!"),
            data: { owner }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list owner  */
const getOwner = async (req, res) => {
    try {
        const reqBody = req.body;
        const owner = await ownerService.getOwner(reqBody);
        console.log();
        if (!owner) {
            throw new Error("Owner  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("owner list successfully!"),
            data: { owner }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete owner  */
const deleteOwner = async (req, res) => {
    try {
        const id = req.params.Id;
        const ownerEx = await ownerService.getOwner();
        if (!ownerEx) {
            throw new Error("Owner  not found!")
        }
        const owner = await ownerService.deleteOwner(id)
        res.status(200).json({
            success: true,
            message: ("owner delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

/**update owner  */
const updateOwner = async (req, res) => {
    try {
        const id = req.params.Id;
        const ownerEx = await ownerService.getOwnerById();
        if (!ownerEx) {
            throw new Error("Owner  not found!")
        }
        const owner = await ownerService.update(id, req.body)
        res.status(200).json({
            success: true,
            message: ("owner update successfully!"),
            data: owner
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createOwner,
    getOwner,
    deleteOwner,
    updateOwner
}