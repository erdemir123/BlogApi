"use strict";
/* -------------------------------------------------------
    EXPRESSJS - Blog Project with Mongo
------------------------------------------------------- */
//Controllers
require("express-async-errors");
const passwordEncrypt = require("../helpers/passwordEncrypt");
const { User } = require("../models/user.models");

module.exports.User = {
  list: async (req, res) => {
    const data = await User.find();
    console.log(data);
    res.status(200).send({
      error: false,
      data: data,
    });
  },
  create: async (req, res) => {
    const data = await User.create(req.body);
    console.log(data);
    res.status(201).send({
      error: false,
      body: req.body,
      data: data,
    });
  },
  read: async (req, res) => {
    const id = req.params.categoryId;
    const data = await User.findOne(id);
    res.status(202).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    const id = req.params.categoryId;
    const data = await User.updateOne(id, req.body);
    const newdata = await User.findOne(id);
    console.log(data);
    res.status(202).send({
      error: false,
      body: req.body,
      data: data,
      newdata: newdata,
    });
  },
  delete: async (req, res) => {
    const id = req.params.categoryId;
    const data = await User.deleteOne(id);
    console.log(data);
    res.sendStatus(data.deletedCount >= 1 ? 204 : 400).send({
      error: false,
      data: data,
    });
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email: email });
      if (user && user.password == passwordEncrypt(password)) {
        // Do something when login is successful

        // session kaydetme kullanıcı giriş yaptı

        req.session = {
          //email: user.email,
          id: user.id,
          password: user.password,
        };

        if (req.body.remindMe) {
          res.session.remindMe = req.body.remindMe;
          req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3; //maxAge yoksa session varsa cookie /// session tarayıcı kapanan kadar duru kapanınca silinir
        }

        res.status(200).send({
          errorr: false,
          message: "login Ok",
          user,
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("Invalid email or password");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and password are required");
    }
  },
  logout: async (req, res) => {
    req.session = null;
    res.status(200).send({
      errorr: false,
      message: "logOut Ok",
    });
  },
};
