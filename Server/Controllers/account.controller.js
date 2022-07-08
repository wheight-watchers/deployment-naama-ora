const accountService = require("../Services/account.service");

module.exports.login = async (req, res, next) => {
  try {
    const user = await accountService.login(
      req.query.email,
      req.query.password
    );
    res.status(200).send(user);
  } catch (err) {
    next(err);
  }
};
