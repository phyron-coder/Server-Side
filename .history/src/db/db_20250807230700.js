const mongoose = require('mongoose');

const dbName = process.env.DB_NAME;

const mongoURI = `mongodb://localhost:27017/${dbName}`;

async function dbConnect() {

    mongoose.connection.on("connected", () => {
        console.log(`Connected to database: ${dbName}`);
    });
    await mongoose.connect({
        DB_NAME: dbName,
    })


}

module.exports = { dbConnect };