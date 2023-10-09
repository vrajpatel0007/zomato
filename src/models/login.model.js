const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
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
const login = mongoose.model("login", loginSchema)
module.exports = login ;