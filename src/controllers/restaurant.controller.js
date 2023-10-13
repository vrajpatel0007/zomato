const { restaurantService } = require("../services")
/**create restaurant  */
const createrestaurant = async (req, res) => {
    try {
        const reqBody = req.body;

     

        const restaurant = await restaurantService.createrestaurant(reqBody);
        if (!restaurant) {
            throw new Error("restaurant  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("restaurant create successfully!"),
            data: { restaurant }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list restaurant  */
const getrestaurant = async (req, res) => {
    try {
        const reqBody = req.body;
        const restaurant = await restaurantService.getrestaurant(reqBody);
        if (!restaurant) {
            throw new Error("restaurant  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("restaurant  list successfully!"),
            data: { restaurant }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete restaurant  */
const deleterestaurant = async (req, res) => {
    try {
        const id = req.params.Id;
        const restaurantEx = await restaurantService.getrestaurant();
        if (!restaurantEx) {
            throw new Error("restaurant  not found!")
        }
        const restaurant = await restaurantService.deleterestaurant(id)
        res.status(200).json({
            success: true,
            message: ("restaurant  delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

/**update restaurant  */
const updaterestaurant = async (req, res) => {
    try {
        const id = req.params.Id;
        const restaurantEx = await restaurantService.getrestaurantById();
        if (!restaurantEx) {
            throw new Error("restaurant  not found!")
        }
        const restaurant = await restaurantService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("restaurant  update successfully!"),
            data: restaurant
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createrestaurant,
    getrestaurant,
    deleterestaurant,
    updaterestaurant
}