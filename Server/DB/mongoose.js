const mongoose = require('mongoose');
require('dotenv').config();
class MongooseDB {
    constructor() { }
    async connect() {
      debugger
        // const url=`mongodb://localhost:27017`;
        const url = process.env.MONGODB_CONNECTION;
        await mongoose.connect(url
          // ,{
          //   useNewUrlParser: true,
          //   // useFindAndModify: false,
          //   useUnifiedTopology: true
          // }
          );
        console.log(`mongoose DB connected!`);
    };
}
module.exports = new MongooseDB();
