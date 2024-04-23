"use strict";
/* -------------------------------------------------------
    EXPRESSJS - Blog Project with Mongo
------------------------------------------------------- */

const mongoose = require("mongoose");


//Password Encription

//PBKDF2 piyadsada kullanıcı şifrelerini şifrelemek için kullanılıyor

const crypto = require('node:crypto')



const keyCode = process.env.SECRET_KEY || "write_random_password"
const loopCount=10_000 // on bin defa şifreledi
const charCount = 32 // ne kadar isteren yarısını yaz 64 karakter istersen32 yazacaksin
const encType ="sha512"


module.exports=(password)=>{
    return crypto.pbkdf2Sync(password,keyCode,loopCount,charCount,encType).toString("hex")
    }