const fs = require("fs/promises");

const getData = async () => fs.readFile('file.json').then((data) => JSON.parse(data));

const updateData = async (data) =>
  fs.writeFile(
    "file.json",
    JSON.stringify(data),
    function (err, result) {
      if (err) console.log("error", err);
      else console.log(result);
    }
  );

async function getDiary(userId) {
  const data = await getData();
  const users = data.users;
  const user = await users.find((user) => user.id === parseInt(userId));
  if (!user) {
    throw new Error("this user is not Exists");
  }
  return user.diary;
}

async function addDiary(userId, diary) {
  if (!userId || !diary) {
    throw new Error("must get user id and diary...");
  }
  let data = await getData();
  const users = data.users;
  let user = await users.find((user) => user.id === parseInt(userId));
  // const dataForThisUser = await data.forEach((u) => { if (u.id === userId) { dataForThisUser = [...dataForThisUser, u] } })
  let _diary = user.diary;
  const exist = await _diary.find((_d) => {
    _d.date === diary.date;
  });
  if (exist) {
    throw new Error("Has been already updated on this date:) ");
  }
  _diary = [..._diary, diary];
  user.diary=_diary;
   // Object.assign(_diary, [..._diary, diary]);
  await updateData(data);
  return _diary;
}

async function updateDiary(userId,diaryDate,newDiary) {
   console.log("in update diary: ")
   console.log("userId: "+userId+" diaryDate: "+diaryDate)
  let data = await getData();
  if (!data) {
    throw new Error("have not found users");
  }
  let users = data.users;
  let user = await users.find((user) => user.id == parseInt(userId));
  if(!user){
     throw new Error("user was not found")
  }
  let _diary = await user.diary;
  console.log("user diary:"+JSON.stringify(_diary));
  let specificDiary = await user.diary.find((item) => {
   item.date == diaryDate;
  });
  if (!specificDiary) {
    throw new Error(`not found specific diary with date ${diaryDate}`);
  }
  Object.assign(specificDiary, newDiary);
  await updateData(data);
  return data;
}
async function deleteDairy(userId, dairyDate) {
  let data = await getData();
  const users=data.users;
  // if (!data) {
  //    throw new Error('not found user to delete..');
  // }
  // const dataForThisUser = await data.forEach((u) => { if (u.id === userId) { dataForThisUser = [...dataForThisUser, u] } });
  const indexOfThisUser = await users.findIndex((u) => u.id === parseInt(userId));
  if (indexOfThisUser===-1) {
    throw new Error("not found user to delete..");
  }
  let userDiary = users[indexOfThisUser].diary;
  if (!userDiary) {
    throw new Error("not found user diary");
  }
  let diaryWithIdIndex = await userDiary.findIndex((d) => {
    d.date === dairyDate;
  });
  if (!diaryWithIdIndex) {
   throw new Error("not found specific diary");
 }
  userDiary.splice(diaryWithIdIndex, 1);
  Object.assign(data.users[indexOfThisUser].diary, userDiary);
  updateData(data);
  return userDiary;
}
module.exports = {
  getDiary,
  addDiary,
  updateDiary,
  deleteDairy,
};
