const mongoose = require("mongoose");

const info = mongoose.Schema(
    {
        id:{
            type: Number,
            required: true,
            unique: true
        },
        fitaovana:{
            type: [String],
            required: true,
        },
        fotoana:{
            type: [String],
            required: true,
        },
        toerana:{
            type: [String],
            required: true,
        },
        sarandasy:{
            type: [String],
            required: true,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('info', info);
