const { DeliveryService } = require("../services")
/**create Delivery  */
const createDelivery = async (req, res) => {
    try {
        const reqBody = req.body;

        const Delivery = await DeliveryService.createDelivery(reqBody);
        if (!Delivery) {
            throw new Error("Delivery  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("Delivery create successfully!"),
            data: { Delivery }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list Delivery  */
const getDelivery = async (req, res) => {
    try {
        const reqBody = req.body;
        const Delivery = await DeliveryService.getDelivery(reqBody);
        if (!Delivery) {
            throw new Error("Delivery  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("Delivery  list successfully!"),
            data: { Delivery }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete Delivery  */
const deleteDelivery = async (req, res) => {
    try {
        const id = req.params.Id;
        const DeliveryEx = await DeliveryService.getDelivery();
        if (!DeliveryEx) {
            throw new Error("Delivery  not found!")
        }
        const Delivery = await DeliveryService.deleteDelivery(id)
        res.status(200).json({
            success: true,
            message: ("Delivery  delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

/**update Delivery  */
const updateDelivery = async (req, res) => {
    try {
        const id = req.params.Id;
        const DeliveryEx = await DeliveryService.getDeliveryById();
        if (!DeliveryEx) {
            throw new Error("Delivery  not found!")
        }
        const Delivery = await DeliveryService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("Delivery  update successfully!"),
            data: Delivery
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createDelivery,
    getDelivery,
    deleteDelivery,
    updateDelivery
}