const mongoose = require("mongoose");

const DeliverySchema = new mongoose.Schema(
    {
        Delivery_boy_name: {
            type: String,
            trim: true,
        },
        Delivery_boy_number: {
            type: String,
            trim: true,
        },
        Delivery_location: {
            type: String,
            trim: true,
        },
        Delivery_time: {
            type: String,
            trim: true,
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
const Delivery = mongoose.model("Delivery", DeliverySchema)
module.exports = Delivery;