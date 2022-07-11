const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./Routes/user.router");
// const managerRouter = require("./Routes/manager.router");
const meetingRouter = require("./Routes/meeting.router");
const accountRouter = require("./Routes/account.router");
const authMiddleware = require("./MiddleWare/middleware");
var bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// app.use("/manager", managerRouter);
app.use("/users", userRouter);
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
