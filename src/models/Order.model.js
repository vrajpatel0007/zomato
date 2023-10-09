const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        Order_name: {
            type: String,
            trim: true,
        },
        Order_price: {
            type: String,
            trim: true,
        },
        food: {
            type: mongoose.Types.ObjectId,
            ref: "food",
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionkey: false
    }
)
const Order = mongoose.model("Order", OrderSchema)
module.exports = Order;