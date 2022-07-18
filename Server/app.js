const express = require("express");
// const mongoose = require('mongoose');
const db = require('./DB/mongoose')
const app = express();
const cors = require("cors");
// const userRouter = require("./Routes/user.router");
// const meetingRouter = require("./Routes/meeting.router");
// const accountRouter = require("./Routes/account.router");
const userRouter = require("./MongoRoutes/user.MongoRouter");
const meetingRouter = require("./MongoRoutes/meeting.MongoRouter");
const accountRouter = require("./MongoRoutes/account.MongoRouter");
// const authMiddleware = require("./MiddleWare/middleware");
// const logger = require('./Log/logger');
const port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
let bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config();
db.connect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// app.use("/manager", managerRouter);
app.use("/users",
  userRouter);
app.use("/meeting",
  //  authMiddleware,
  meetingRouter);
app.use("/account",
  //  authMiddleware,
  accountRouter);
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);
app.listen(port, () => {
  console.log(` Hi! process on port ${port}`);
});
