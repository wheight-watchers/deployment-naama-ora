// const { MongoClient } = require('mongodb');
// const connectionString = "https://localhost:27017/weight-watchers.users";
// // const dotenv = require('dotenv');
// // dotenv.config();
// class dataBase {

//   constructor() {

//   }
//   async connect() {
//     const client = new MongoClient(connectionString, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     let connected = await client.connect();
//     Logger.setLevel("debug");
//     this.db = connected.db("weight-watchers");
//     await db.command({ hello: 1 });

//     console.log("DB Connected!")
//   };
//   getDB() {
//     debugger;
//     return this.db;
//   }
// }

// module.exports = new dataBase();