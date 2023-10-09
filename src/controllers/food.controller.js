const { foodService } = require("../services")
/**create food  */
const createFood = async (req, res) => {
    try {
        const reqBody = req.body;

        if (req.file) {
            reqBody.image = req.file.filename;
        } else {
            throw new Error("Food  image is required!");
        }

        const food = await foodService.createFood(reqBody);
        if (!food) {
            throw new Error("food  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("food  create successfully!"),
            data: { food }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**list food  */
const getFood = async (req, res) => {
    try {
        const reqBody = req.body;
        const food = await foodService.getFood(reqBody);
        if (!food) {
            throw new Error("food  not found!")
        }
        res.status(200).json({
            success: true,
            message: ("food  list successfully!"),
            data: { food }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/**delete food  */
const deleteFood = async (req, res) => {
    try {
        const id = req.params.Id;
        const foodEx = await foodService.getFood();
        if (!foodEx) {
            throw new Error("food  not found!")
        }
        const food = await foodService.deleteFood(id)
        res.status(200).json({
            success: true,
            message: ("food  delete successfully!"),
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

/**update food  */
const updateFood = async (req, res) => {
    try {
        const id = req.params.Id;
        const foodEx = await foodService.getFoodById();
        if (!foodEx) {
            throw new Error("food  not found!")
        }
        const food = await foodService.updateDetails(id, req.body)
        res.status(200).json({
            success: true,
            message: ("food  update successfully!"),
            data: food
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createFood,
    getFood,
    deleteFood,
    updateFood
}