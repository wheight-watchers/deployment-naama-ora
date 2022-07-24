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
const authRouter = require("./auth");
// const authMiddleware = require("./MiddleWare/middleware");
// const logger = require('./Log/logger');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
let bodyParser = require('body-parser')
const dotenv = require('dotenv');
const { requiresAuth } = require('express-openid-connect');
// const unless = require('express-unless')
// const { requiresAuth } = require('express-openid-connect');

const { auth } = require('express-openid-connect');
const path = require("path");
const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

dotenv.config();
db.connect();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_CLIENT_SECRET,
  baseURL: 'http://localhost:3000',
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: 'https://dev-vykvjfcp.us.auth0.com'
};
const url=`http://127.0.0.1:5500/Client/Manager.html`

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
app.use('/users', requiresAuth(), userMongoRouter);
// req.isAuthenticated is provided from the auth router
app.get('/',(req, res) => {
 
  if(req.oidc.isAuthenticated()){
   // res.cookies(req.cookies);
    res.redirect(url)
  }
  else{
    res.send('log out')
  }
 // res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.use(cors());
app.use(express.json());

const port=process.env.PORT || 3000;

const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
};


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
};

const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    /**
     * Access tokens are used to authorize users to an API
     * (resource server)
     * accessToken is the token to call the Auth0 API
     * or a secured third-party API
     * extraParams.id_token has the JSON Web Token
     * profile has all the information from the user
     */
    return done(null, profile);
  }
);

app.use(expressSession(session));

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});

app.use("/", authRouter);

if (app.get("env") === "production") {
  // Serve secure cookies, requires HTTPS
  session.cookie.secure = true;
}

app.get("/users", secured, (req, res, next) => {
  const { _raw, _json, ...userProfile } = req.user;
  res.render("user", {
    title: "Profile",
    userProfile: userProfile
  });
});





// app.use(express.urlencoded());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// app.use("/manager", managerRouter);

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

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.listen(port, () => {
  console.log(` Hi! process on port ${port}`);
});
