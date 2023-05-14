const mongoose = require("mongoose")

const BoxerSchema = new mongoose.Schema({
    _id: {type:String},
    Boxer: {
        LeftGlove: {
            x: Number,
            y: Number,
            z: Number
        },
        RightGlove: {
            x: Number,
            y: Number,
            z: Number
        },
    },
})

const Boxer = mongoose.model('Boxer', BoxerSchema)

module.exports = Boxer