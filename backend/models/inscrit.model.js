const mongoose = require("mongoose");

const inscrits = mongoose.Schema(
    {
        anarana:{
            type: String,
            required: true,
        },
        fanampiny:{
            type: String,
            required: true,
        },
        fokonolona:{
            type: String,
            required: true,
        },
        fivondronana:{
            type: String,
            required: true,
        },
        ambaratonga:{
            type: String,
            required: true,
        },
        contact:{
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('inscrits', inscrits);
