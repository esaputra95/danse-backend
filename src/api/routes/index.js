const express = require("express");
const app = express();
const cors = require('cors');
// CONFIG
require('dotenv').config();

const bodyParser = require('body-parser')
app.use(cors())
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Middleware
const middleware = require('./../middlewares');

// DEFISNSI ROUTER
const auth = require("./loginRouter")
const userRouters = require("./userRouter")
const recruitmentRouters = require("./recruitmentRouter")

// USE ROUTER
app.use("/users", middleware.accessToken, userRouters);
app.use("/recruitment", middleware.accessToken, recruitmentRouters);
app.use("/login", auth);

app.listen(process.env.PORT, ()=>{
    console.log('server run port : ',process.env.PORT)
})