require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const asyncHandler = require('express-async-handler');
const courseRoutes = require('./src/routes/course');
const { logger, errorHandler } = require('./src/middlewares');

const { dbConnect } = require('./src/db/db');

dbConnect();


app.get('/db', asyncHandler((req, res, next) => {
    // Simulating a database error
    return getDB();
}));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(logger);
app.use(errorHandler);

app.use('/courses', courseRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

