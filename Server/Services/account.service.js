// const { post } = require("../Controllers/user.controller");
// const UserModel = require("../models/user.model");
const fs = require("fs/promises");
// const { json } = require("body-parser");
// const dataFromFile = fs.readFileSync("../file.json");
// myData = JSON.parse(dataFromFile);

const getData = async () =>
  fs.readFile("file.json").then((data) => JSON.parse(data));
// const updateData = async (data) =>
//   fs.writeFile("Server/file.json", JSON.stringify(data));

const login = async (email, password) => {
  const data = await getData();
  const manager=data.manager;
  const users=data.users;
  const _user = await users.find(
    (user) => user.email == email && user.password == parseInt(password)
  );
  if(!_user){
    if(manager.password == password && manager.email == email){
      return manager;
    }
    else throw new Error(`user or manager with these details was not found`);
  }
  return _user;
};

module.exports = {
  login,
  // signUp
};
