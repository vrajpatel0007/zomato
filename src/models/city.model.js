const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
    {
        city_name: {
            type: String,
            trim: true,
        },
        pincod: {
            type: String,
            trim: true,
        },
        state:{
            type: mongoose.Types.ObjectId,
            ref: "state",
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
const city = mongoose.model("city", citySchema)
module.exports = city ;