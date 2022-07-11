const accountService = require("../Services/account.service");

module.exports={
  userLogin : async (req, res, next) => {
    try {
      const user = await accountService.userlogin(
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
      const manager = await accountService.managerlogin(
        req.query.email,
        req.query.password
      );
      res.status(200).send(manager);
    } catch (err) {
      alert("not found");
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
