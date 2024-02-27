"use strict";
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
/* ------------------------------------------------------- *
{
  "name": "Ratatouille",
  "point": "8.1",
   "categoryId" :"65dc8a189a05213233b9b53a",
  "description": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.",
 
  "image": "https://m.media-amazon.com/images/I/81n+81eQRuL._AC_UF894,1000_QL80_.jpg"
  
}
* ------------------------------------------------------- */
const passwordEncrypt = require("../helpers/passwordEncrypt");

const MovieSchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
     
    },
    commentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      
    },
    name: {
      type: String,
      trim: true,
      
      
    },

    point: {
      type: Number,
      trim: true,
     
    },

    image: {
      type: String,
      trim: true,
      
    },

    description: {
      type: String,
      trim: true,
      
    },

   
  },
  { collection: "movies", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Movie", MovieSchema);
