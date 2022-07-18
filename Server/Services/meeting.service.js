const fs = require("fs/promises");
const uuid = require("uuid");
const uuIdv4 = uuid.v4;


const getData = async () => fs.readFile('Server/file.json').then((data) => JSON.parse(data));
const updateData = async (data) => fs.writeFile('Server/file.json', JSON.stringify(data), function (err, result) {
  if (err) console.log('error', err);
  else console.log('success', result)
});
module.exports = {
  getAllTheMeetingsForUser: async (userId) => {
    const data = await getData();
    const users = data.users;
    const _user = await users.find((user) => user.id === parseInt(userId));
    return _user.Weights.meetings;
  },
  addMeeting: async (meetings) => {
    const data = await getData();
    debugger
    let i = 0;
    const users = data.users;
    await users.forEach(_user => {
      // _user.Weights.meetings.push(meetings[i])
      _user.Weights.meetings=[..._user.Weights.meetings,meetings[i]]
      i = i + 1
      // Object.assign(data.users, _user)
    })
    data.users=users;
    await updateData(data);
    return data;
  },
  deleteMeeting: async (id) => {
    const data = await getData();
    let i=0
    await data.users.forEach(user => {
      i=0;
       user.Weights.meetings.forEach(m=>{
        if(m.id===parseInt(id)){
          user.Weights.meetings.splice(i,1)
        }
        i=i+1
      })
    })
   
    await updateData(data);
    return data;
  }
}

