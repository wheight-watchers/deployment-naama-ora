// const { post } = require("../Controllers/user.controller");
// const UserModel = require("../models/user.model");
const fs = require("fs/promises");
// const { json } = require("body-parser");
// const dataFromFile = fs.readFileSync("../file.json");
// myData = JSON.parse(dataFromFile);

const getData = async () =>
  fs.readFile("file.json").then((data) => JSON.parse(data));
// const updateData = async (data) =>
//   fs.writeFile('file.json', JSON.stringify(data));

const userlogin = async (email, password) => {
  const data = await getData();
  const users = data.users;
  const _user = await users.find(
    (user) => user.email == email && user.password == parseInt(password)
  );
  // if (_user) {
  return _user;
  // }
  // throw new Error(`user with these details was not found`);
};
const managerlogin = async (email, password) => {
  const data = await getData();
  const manager = data.manager;
  if (manager.password == password && manager.email == email) {
    return manager;
  }
  // throw new Error(`manager with these details was not found`);
  return null;
};
module.exports = {
  userlogin,
  managerlogin,
  // signUp
};
