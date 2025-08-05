const express = require('express');
const bodyParser = require('body-parser');

const database = {
    users: [
        { id: 1, name: 'Phon Phyron', email: 'phonphyron@example.com' },
        { id: 2, name: 'Huon Theavy', email: 'huontheavy@example.com' }
    ]
};

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

// ======================== Users API ========================
app.get('/users/:id', (req, res) => {
    const user = database.users.find(user => user.id === parseInt(req.params.id));
    res.json(user);
});
app.get('/users', (req, res) => {
    res.json(database.users);
});

// ======================== Courses API ========================

function logger(req, res, next) {
    // console.log("Incoming Request:", req.method, req.url);
    next();
}

app.use(logger);

app.get('/courses', logger, (req, res) => {
    res.send('List of courses');
});
app.post('/courses', (req, res) => {
    res.send(req.body);
});

// ======================== Other Routes ========================
app.get('/', (req, res) => {
    res.send('Hello, Welcome to my Express server and my fullstack app!');
});
app.get('/about', (req, res) => {
    res.json({
        name: 'PPC',
        age: 20,
        city: 'New York',
        country: 'USA'
    });
});
app.post('/about', (req, res) => {
    res.send(req.body);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
