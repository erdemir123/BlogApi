"use strict"
const express= require("express")
const app = express()
app.use(express.json())
require("express-async-errors");
require("dotenv").config()

const PORT = process.env.PORT 
const HOST = process.env.HOST 
require("./src/configs/connection")


app.all('/', (req, res) => res.send('Hello World!'))

app.use('/blog',require("./src/routes/blog.router"))
app.use(require("./src/middlewares/errorHandler"))
app.listen(PORT, () => console.log(`Example app listening on PORT http://${HOST}:${PORT}`))
//require("./src/sync")()