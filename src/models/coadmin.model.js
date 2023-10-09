const mongoose = require("mongoose");

const coadminSchema = new mongoose.Schema(
    {
        coadmin_name: {
            type: String,
            trim: true,
        },
        coadmin_Number: {
            type: String,
            trim: true,
        },
        email: {
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
const coadmin = mongoose.model("coadmin", coadminSchema)
module.exports = coadmin;