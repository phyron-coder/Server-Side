const mongoose = require('mongoose');

const dbName = process.env.DB_NAME;

const mongoURI = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(mongoURI)
    .then(() => console.log(`Connected to database: ${dbName}`))
