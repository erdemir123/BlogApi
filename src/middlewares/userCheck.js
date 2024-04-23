"use strict";
const { User } = require("../models/user.models");

module.exports = async (req, res, next) => {
  if (req?.session?.id) {
    const { id, password } = req.session;
    const user = User.findOne({ _id: id });
    if (user && user.password == password) {
      req.session = user;
      req.isLogin = true;
    } else {
      req.session = null;
      req.isLogin = false;
    }
  }
  next();
};

