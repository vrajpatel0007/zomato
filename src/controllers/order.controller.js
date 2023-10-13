const { orderService } = require("../services")
/**create order  */
const createorder = async (req, res) => {
    try {
        const reqBody = req.body;


        const order = await orderService.createorder(reqBody);
        if (!order) {
            throw new Error("order  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("order create successfully!"),
            data: { order }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list order  */
const getorder = async (req, res) => {
    try {
        const reqBody = req.body;
        const order = await orderService.getorder(reqBody);
        if (!order) {
            throw new Error("order  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("order  list successfully!"),
            data: { order }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete order  */
const deleteorder = async (req, res) => {
    try {
        const id = req.params.Id;
        const orderEx = await orderService.getorder();
        if (!orderEx) {
            throw new Error("order  not found!")
        }
        const order = await orderService.deleteorder(id)
        res.status(200).json({
            success: true,
            message: ("order  delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

/**update order  */
const updateorder = async (req, res) => {
    try {
        const id = req.params.Id;
        const orderEx = await orderService.getorderById();
        if (!orderEx) {
            throw new Error("order  not found!")
        }
        const order = await orderService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("order  update successfully!"),
            data: order
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createorder,
    getorder,
    deleteorder,
    updateorder
}