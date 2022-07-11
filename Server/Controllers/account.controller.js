const accountService = require("../Services/account.service");

module.exports={
  login : async (req, res, next) => {
    try {
      const userOrManager = await accountService.login(
        req.query.email,
        req.query.password
      );
      res.status(200).send(userOrManager);
    } catch (err) {
      alert("was not found");
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
