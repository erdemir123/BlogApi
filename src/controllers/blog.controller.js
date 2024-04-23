"use strict";
/* -------------------------------------------------------
    EXPRESSJS - Blog Project with Mongo
------------------------------------------------------- */
//Controllers
require("express-async-errors");
const { BlogCategory } = require("../models/blog.models");

module.exports.BlogCategory = {
  list: async (req, res) => {
    const data = await BlogCategory.find();
    console.log(data);
    res.status(200).send({
      error: false,
      data: data,
    });
  },
  create: async (req, res) => {
    const data = await BlogCategory.create(req.body);
    console.log(data);
    res.status(201).send({
      error: false,
      body: req.body,
      data: data,
    });
  },
  read: async (req, res) => {
    const id = req.params.categoryId;
    const data = await BlogCategory.findOne(id);
    res.status(202).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    const id = req.params.categoryId;
    const data = await BlogCategory.updateOne(id, req.body);
    const newdata = await BlogCategory.findOne(id);
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
    const data = await BlogCategory.deleteOne(id);
    console.log(data);
    res.sendStatus(data.deletedCount >= 1 ? 204 : 400).send({
      error: false,
      data: data,
    });
  },
};
