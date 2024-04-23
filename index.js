"use strict";
const express = require("express");
const app = express();
app.use(express.json());
require("express-async-errors");
require("dotenv").config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;
require("./src/configs/connection");

const session = require("cookie-session");

app.use(
  session({
    secret: process.env.SECRET_KEY,
    //maxAge: 1000 * 60 * 60 * 24 * 3, // 3 gün ömür olduğu için burası cooki oldu o yüzden maxAge burada kullanmak istebnez
  })
);

app.use(require("./src/middlewares/userCheck"));
app.all("/", (req, res) => {
  if (req?.isLogin) {
    res.send({
      error: false,
      message: "Welcome",
      session: req.session, //sessiondaki bilgileri verir sessionda bişey varsa })
      user:req.user
    });
  } else {
    res.send({
      error: false,
      message: "Welcome",
      session: req.session, //sessiondaki bilgileri verir sessionda bişey varsa })
    });
  }
});

app.use("/blog", require("./src/routes/blog.router"));
app.use("/user", require("./src/routes/user.router"));
app.use(require("./src/middlewares/errorHandler"));
app.listen(PORT, () =>
  console.log(`Example app listening on PORT http://${HOST}:${PORT}`)
);
//require("./src/sync")()
