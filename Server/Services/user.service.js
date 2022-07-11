const fs = require("fs/promises");
const uuid = require("uuid");
const uuIdv4 = uuid.v4;

const getData = async () => fs.readFile('file.json').then((data) => JSON.parse(data));

const updateData = async (data) => fs.writeFile('file.json', JSON.stringify(data), function (err, result) {
  if (err) console.log('error', err);
  else console.log('success', result)
});

module.exports = {
  addUser: async (user) => {
    if (!user.firstName || !user.lastName || !user.id || !user.email) {
      throw new Error("user must include username ,email and password");
    }
    const id = uuIdv4();
    user.id = id;
    const data = (await getData()) || [];
    const exists = await data.users.find(
      (_user) => _user.email === user.email || _user.id === parseInt(user.id)
    );
    if (exists) {
      throw new Error("details already exist");
    }
    data.users.push(user)
    await updateData(data);
    return data;
  },
  getUsersList: async () => {
    const data = await getData();
    return data.users;
  },
  getUser: async (id) => {
    const data = await getData();
    const users = data.users;
    const _user = await users.find((user) => user.id === parseInt(id));
    return _user;
  },
  deleteUser: async (id) => {
    const data = await getData();
    const users = data.users;
    const index = await users.findIndex((user) => user.id === parseInt(id));
    if (index === -1) {
      throw new Error(`user with id ${id} not found`);
    }
    users.splice(index, 1);
    Object.assign(data.users, users);
    await updateData(data);
    return data;
  },
  updateUser: async (id, newUser) => {
    const userData = await getData();
    const users = userData.users;
    const index = await users.findIndex((user) => user.id === parseInt(id));
    if (index === -1) {
      throw new Error(`user with id ${id} not found`);
    }
    users.splice(index, 1);
    Object.assign(userData.users, users);
    await updateData(userData);
    userData.users.push(newUser)
    await updateData(userData);
    return userData;

  

  }
}

