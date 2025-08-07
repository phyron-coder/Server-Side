const mongoose = require('mongoose');

const dbName = process.env.DB_NAME;

const mongoURI = `mongodb://localhost:27017/${dbName}`;

async function dbConnect() {


    await mongoose.connect(mongoURI)


}