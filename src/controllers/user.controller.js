"use strict";
/* -------------------------------------------------------
    EXPRESSJS - Blog Project with Mongo
------------------------------------------------------- */
//Controllers
require("express-async-errors");
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
};
