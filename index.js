const express = require("express");
const cors = require("cors")
const { userRouter } = require("./router/user.router");
const { connection } = require("./config/db");
const jwt = require("jsonwebtoken");
const { auth } = require("./config/middleware/auth.middle");
require("dotenv").config();

const io = require('socket.io')()
const app = express();

const http = require("http").Server(app)
const path = require('path')



app.use(cors())
app.use(express.json()); //json parsar

//user router
app.use("/user", userRouter);










http.listen(process.env.port || 5000, async() => {
  await connection
  console.log("Database is connected")
  console.log(`${process.env.port} is working`);
});
