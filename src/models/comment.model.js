"use strict";
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */
const passwordEncrypt = require("../helpers/passwordEncrypt");

const CommentSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
   
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comment: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    }, 
    
  },
  { collection: "comments", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Comment", CommentSchema);
