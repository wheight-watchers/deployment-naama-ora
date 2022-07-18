const { MongoClient } = require('mongodb');
const connectionString = "https://safe-tor-83297.herokuapp.com";

class dataBase {

  constructor() {

  }
  async connect() {
    const client = new MongoClient(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    let connected = await client.connect();
    Logger.setLevel("debug");
    this.db = connected.db("weight-watchers");
    await db.command({ hello: 1 });

    console.log("DB Connected!")
  };
  getDB() {
    return this.db;
  }
}

module.exports = new dataBase();