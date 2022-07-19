const mongoose = require('mongoose');

class MongooseDB {
    constructor() { }
    async connect() {
        // const url=`mongodb://localhost:27017`;
        const url = `mongodb://localhost:${process.env.HOST || 27017}/${process.env.DB || "weight-watchers.users"}`;
        await mongoose.connect(url,{
            useNewUrlParser: true,
            // useFindAndModify: false,
            useUnifiedTopology: true
          });
        console.log(`mongoose DB connected!`);
    };
}
module.exports = new MongooseDB();
