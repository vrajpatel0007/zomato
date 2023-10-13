const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
    {
        food_name: {
            type: String,
            trim: true,
        },
        food_imag: {
            type: String,
            trim: true,
        },
        food_desc: {
            type: String,
            trim: true,
        },
        food_tayps: {
            type: String,
            trim: true,
        },
        food_price: {
            type: String,
            trim: true,
        },
        cooking_time: {
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
        versionkey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.food_imag) {
                    data.food_imag = `${config.base_url}food_imag/${data.food_imag}`;
                }
            },
        },
    }
)
const food = mongoose.model("food", foodSchema)
module.exports = food;