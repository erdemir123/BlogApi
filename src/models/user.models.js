"use strict";
/* -------------------------------------------------------
    EXPRESSJS - Blog Api
------------------------------------------------------- */
//Model

const mongoose = require("mongoose");
const passwordEncrypt = require("../helpers/passwordEncrypt");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: [true, "Email must be required"],
      unique: true,
      validate: [
        (email) => {
          if (email.includes("@") && email.includes(".")) return true;
          else false
        },
        "Email type is inCorrect"
      ],
    },
    password: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      set:(password)=>passwordEncrypt(password)
    },
    firstname: String,
    lastname: String,
  },
  {
    collection: "User",
    timestamps: true,
  }
);

module.exports = {
  User: mongoose.model("User", UserSchema),
};
