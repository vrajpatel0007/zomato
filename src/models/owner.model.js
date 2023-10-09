const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
    {
        owner_name: {
            type: String,
            trim: true,
        },
        Number: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        shop_name: {
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
const owner = mongoose.model("owner", ownerSchema)
module.exports = owner;