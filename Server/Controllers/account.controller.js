const accountService = require("../Services/account.service");

module.exports={
  userLogin : async (req, res, next) => {
    try {
      const user = await accountService.Userlogin(
        req.query.email,
        req.query.password
      );
      res.status(200).send(user);
    } catch (err) {
      next(err);
    }
  },
  managerLogin : async (req, res, next) => {
    try {
      const user = await accountService.managerlogin(
        req.query.email,
        req.query.password
      );
      res.status(200).send(user);
    } catch (err) {
      next(err);
    }
  }
  // ,
  // signUp : async (req, res, next) => {
  //   try{

  //   }
  //   catch{

  //   }
  // }
}
