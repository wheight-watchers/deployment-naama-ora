const fs = require('fs')
const getData = async () => fs.readFile("Server/file.json").then(data => JSON.parse(data));
const updateData = async (data) => fs.writeFile("Server/file.json", JSON.stringify(data));

async function getDiary(userId) {
   const data = await getData();
   const users=data.users;
   const user = await users.forEach((user) => user.id === intParse(userId) )
   if (!user) {
      throw new Error('this user is not Exists');
   }
   return user.diary;
} 

async function addDiary(userId, diary) {
   if (!userId || diary) {
      throw new Error('must get user id and diary...');
   }
   const data = (await getData()) || [];
   const users=data.users;
   const user = await users.forEach((user) => user.id === intParse(userId) )
   // const dataForThisUser = await data.forEach((u) => { if (u.id === userId) { dataForThisUser = [...dataForThisUser, u] } })
   const _diary = user.diary
   const exist = await _diary.find((_d) => { _d.date === diary.date });
   if (exist) {
      throw new Error('Has been already updated on this date:) ');
   }
   // _diary = [..._diary, diary];
   Object.assign(_diary, [..._diary,diary]);
   await updateData(data);
   return _diary;

}

async function updateDiary(userId, dairyId, diary) {
   const data = await getData();
   if (!data) {
      throw new Error('not found user to update..');
   }
   const users=data.users;
   const user = await users.forEach((user) => user.id === intParse(userId) )
   // const dataForThisUser = await data.forEach((u) => { if (u.id === userId) { dataForThisUser = [...dataForThisUser, u] } });
   const _diary = user.diary;
   const specificDiary = await _diary.find((d) => { d.dairyId === parseInt(dairyId) })
   if (!specificDiary) {
      throw new Error('not found specific diary');
   }
   Object.assign(specificDiary, diary);
   await updateData(data);
   return data;

}
async function deleteDairy(userId, dairyId) {
   const users = await getData();
   // if (!data) {
   //    throw new Error('not found user to delete..');
   // }
   // const dataForThisUser = await data.forEach((u) => { if (u.id === userId) { dataForThisUser = [...dataForThisUser, u] } });
   const indexOfThisUser = await users.findIndex(u => u.id === userId)
   if(!indexOfThisUser){
      throw new Error('not found user to delete..');
   }
   // const _diary = dataForThisUser.diary;
   const userDiary=users[indexOfThisUser].diary;
   // const indexOfUsersDiary = await _diary.findIndex((d) => { d.dairyId === dairyId })
   if(!userDiary){
   // if (!indexOfUsersDiary) {
      throw new Error('not found this diary');
   }
   const diaryWithIdIndex = await userDiary.findIndex((d) => { d.dairyId === dairyId });
   userDiary.splice(diaryWithIdIndex,1);
   Object.assign(users[indexOfThisUser].diary, userDiary);
   updateData(users)
   // data=data.map(x=>x)
   // const slicedArray = mockData.map(d => ({...d, data: d.data.slice(0, 3)}))
   // console.log(slicedArray)
//TODO- Need to cut an index that is within an index- how do it?
   // data.splice(indexOfThisUser[indexOfThisUser], 1);
}
module.exports = {
   getDiary, addDiary, updateDiary, deleteDairy
}