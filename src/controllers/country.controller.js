const { countryService } = require("../services")
/**create country  */
const createcountry = async (req, res) => {
    try {
        const reqBody = req.body;


        const country = await countryService.createcountry(reqBody);
        if (!country) {
            throw new Error("country  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("country create successfully!"),
            data: { country }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list country  */
const getcountry = async (req, res) => {
    try {
        const reqBody = req.body;
        const country = await countryService.getcountry(reqBody);
        if (!country) {
            throw new Error("country  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("country  list successfully!"),
            data: { country }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete country  */
const deletecountry = async (req, res) => {
    try {
        const id = req.params.Id;
        const countryEx = await countryService.getcountry();
        if (!countryEx) {
            throw new Error("country  not found!")
        }
        const country = await countryService.deletecountry(id)
        res.status(200).json({
            success: true,
            message: ("country  delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

/**update country  */
const updatecountry = async (req, res) => {
    try {
        const id = req.params.Id;
        const countryEx = await countryService.getcountryById();
        if (!countryEx) {
            throw new Error("country  not found!")
        }
        const country = await countryService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("country  update successfully!"),
            data: country
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createcountry,
    getcountry,
    deletecountry,
    updatecountry
}