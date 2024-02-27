"use strict"
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */
/* -------------------------------------------------------
     {
            "_id": "65dc8a0d9a05213233b9b538",
            "name": "aile",
            "createdAt": "2024-02-26T12:54:37.086Z",
            "updatedAt": "2024-02-26T12:54:37.086Z",
            "__v": 0
        },
        {
            "_id": "65dc8a189a05213233b9b53a",
            "name": "cocuk",
            "createdAt": "2024-02-26T12:54:48.947Z",
            "updatedAt": "2024-02-26T12:54:48.947Z",
            "__v": 0
        },
        {
            "_id": "65dc8a249a05213233b9b53c",
            "name": "yetiskin",
            "createdAt": "2024-02-26T12:55:00.077Z",
            "updatedAt": "2024-02-26T12:55:00.077Z",
            "__v": 0
        }
    ]
------------------------------------------------------- */

const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// MODELS
const CategorySchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }

}, { collection: "categories", timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('Category', CategorySchema)