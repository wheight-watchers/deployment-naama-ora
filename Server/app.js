const express = require("express");
// const mongoose = require('mongoose');
const cors = require("cors");
const db = require('./DB/mongoose')
const app = express();
const userRouter = require("./Routes/user.router");
const meetingRouter = require("./Routes/meeting.router");
const accountRouter = require("./Routes/account.router");
const userMongoRouter = require("./MongoRoutes/user.MongoRouter");
const meetingMongoRouter = require("./MongoRoutes/meeting.MongoRouter");
const accountMongoRouter = require("./MongoRoutes/account.MongoRouter");
const diaryMongoRouter= require("./MongoRoutes/diary.MongoRouter");

// const authMiddleware = require("./MiddleWare/middleware");
// const logger = require('./Log/logger');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
let bodyParser = require('body-parser')
const dotenv = require('dotenv');
const port=3000;
dotenv.config();
db.connect();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// app.use("/manager", managerRouter);
app.use("/users",
  // userRouter
  userMongoRouter
  );
app.use("/meeting",
  //  authMiddleware,
  // meetingRouter
  meetingMongoRouter
  );
app.use("/account",
  //  authMiddleware,
  // accountRouter
  accountMongoRouter
  );
  app.use("/diary",
  //  authMiddleware,
  diaryMongoRouter
  );
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_CLIENT_SECRET,
  baseURL: 'http://127.0.0.1:5500',
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: 'https://dev-m0ma1edt.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.listen(port, () => {
  console.log(` Hi! process on port ${port}`);
});
