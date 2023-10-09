const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
    {
        restaurant_name: {
            type: String,
            trim: true,
        },
        restaurant_number: {
            type: String,
            trim: true,
        },
        address: {
            type: String,
            trim: true,
        },
        restaurant_email: {
            type: String,
            trim: true,
        },
        restaurant_branches: {
            type: String,
            trim: true,
        },
        restaurant_open_time: {
            type: String,
            trim: true,
        },
        restaurant_end_time: {
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
const restaurant = mongoose.model("restaurant", restaurantSchema)
module.exports = restaurant;