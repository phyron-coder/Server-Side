const mongoose = require('mongoose');

const dbName = process.env.DB_NAME;

const mongoURI = `mongodb://localhost:27017/${dbName}`;

async function dbConnect() {

    mongoose.connect.on("connect", () => {
        console.log(`Connected to database: ${dbName}`);
    });
    await mongoose.connect(mongoURI)


}