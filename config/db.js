const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//mongoose.connect(db);
const connectDB = async () => { //most cases should wrap async await in try catch block
    try{
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log("MongoDB Connected...");
    } catch(err) {
        console.error(err.message);
        //Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;  //does this export only the one function or the whole file?
