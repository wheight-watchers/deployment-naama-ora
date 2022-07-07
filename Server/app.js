const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./Routes/user.router");
const meetingRouter = require("./Routes/meeting.router");
const accountRouter = require("./Routes/account.router");
const authMiddleware = require("./MiddleWare/middleware");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/users", userRouter);
app.use("/meeting", authMiddleware, meetingRouter);
app.use("/account", authMiddleware, accountRouter);

app.listen(port, () => {
  console.log(` Hi! process on port ${port}`);
});
