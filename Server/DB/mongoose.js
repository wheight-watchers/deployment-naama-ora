const mongoose = require ('mongoose');

class MongooseDB {
    constructor(){}
    async connect(){
        const url=`mongodb://localhost:27017`;
        await mongoose.connect(url);
        console.log(`moggooseDB connected`);
    }
}
module.exports= new MongooseDB();