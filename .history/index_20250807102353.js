const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const asyncHandler = require('express-async-handler');
const courseRoutes = require('./src/routes/course');
const { logger, errorHandler } = require('./src/middlewares');

app.get('/db', asyncHandler((req, res, next) => {
    // Simulating a database error
    return getDB();
}));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

app.use(logger);
app.use(errorHandler);

app.use('/courses', courseRoutes);


// ======================== Users API ========================
app.get('/users/:id', (req, res) => {
    const user = database.users.find(user => user.id === parseInt(req.params.id));
    res.json(user);
});
app.get('/users', (req, res) => {
    if (database.users.length > 0) {
        res.json(database.users);
    } else {
        return res.status(404).json({
            status: 404,
            message: 'Not Found all users'
        });
    }
});

// ======================== Courses API ========================





// app.get('/courses', asyncHandler((req, res) => {
//     return res.send(req.query);
// }));


app.listen(3000, () => {
    console.log('Server running on port 3000');
});

