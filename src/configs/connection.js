"use strict";
/* -------------------------------------------------------
    EXPRESSJS - Blog Project with Mongo
------------------------------------------------------- */


const mongoose = require("mongoose")
const MONGODB= process.env.MONGODB
mongoose.connect(MONGODB)
    .then(()=>console.log("DB CONNECTED"))
    .catch((err)=>console.log("DB NOT CONNECTED"))