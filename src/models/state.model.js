const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
    {
        state_name: {
            type: String,
            trim: true,
        },
        country: {
            type: mongoose.Types.ObjectId,
            ref: "country",
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
const State = mongoose.model("state", stateSchema)
module.exports = State;