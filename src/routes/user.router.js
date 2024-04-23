"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
//Routers
const {User} = require("../controllers/user.controller");
const router = require("express").Router();

router.route("/")
  .get(User.list)
  .post(User.create)

router.route("/:userId")
  .get(User.read)
  .put(User.update)
  .delete(User.delete);


  module.exports = router;