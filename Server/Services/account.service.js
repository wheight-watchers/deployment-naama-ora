const fs = require("fs/promises");

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
  debugger
  const data = await getData();
  const manager = data.manager;
  debugger
  if (manager.password == password && manager.email == email) {
    return manager;
  }
  return null;
//  throw new Error(`manager with these details was not found`);
};
module.exports = {
  userlogin,
  managerlogin,
  // signUp
};
