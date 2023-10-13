const { cityService } = require("../services")
/**create city  */
const createcity = async (req, res) => {
    try {
        const reqBody = req.body;


        const city = await cityService.createcity(reqBody);
        if (!city) {
            throw new Error("city  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("city  create successfully!"),
            data: { city }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list city  */
const getcity = async (req, res) => {
    try {
        const reqBody = req.body;
        const city = await cityService.getcity(reqBody);
        if (!city) {
            throw new Error("city  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("city  list successfully!"),
            data: { city }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete city  */
const deletecity = async (req, res) => {
    try {
        const id = req.params.Id;
        const cityEx = await cityService.getcity();
        if (!cityEx) {
            throw new Error("city  not found!")
        }
        const city = await cityService.deletecity(id)
        res.status(200).json({
            success: true,
            message: ("city  delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

/**update city  */
const updatecity = async (req, res) => {
    try {
        const id = req.params.Id;
        const cityEx = await cityService.getcityById();
        if (!cityEx) {
            throw new Error("city  not found!")
        }
        const city = await cityService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("city  update successfully!"),
            data: city
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createcity,
    getcity,
    deletecity,
    updatecity
}