const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const asyncHandler = require('express-async-handler');
const courseRoutes = require('./src/routes/course');





const database = {
    users: [
        { id: 1, name: 'Phon Phyron', email: 'phonphyron@example.com' },
        { id: 2, name: 'Huon Theavy', email: 'huontheavy@example.com' }
    ]
    ,
    courses: [
        { id: 1, name: 'HTML' },
        { id: 2, name: 'CSS' },
        { id: 3, name: 'JavaScript' }
    ]
};
app.get('/db', asyncHandler((req, res, next) => {
    // Simulating a database error
    return getDB();
}));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

app.use(logger);
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





app.get('/courses', asyncHandler((req, res) => {
    return res.send(req.query);
}));









// ======================== Other Routes ========================
app.get('/', (req, res) => {
    res.send('Hello, Welcome to my Express server and my fullstack app!');
});
app.get('/about', (req, res) => {
    return res.json({
        name: 'PPC',
        age: 20,
        city: 'New York',
        country: 'USA'
    });
});
app.post('/about', (req, res) => {
    return res.send(req.body);
});




app.use(errorHandler);



app.listen(3000, () => {
    console.log('Server running on port 3000');
});

