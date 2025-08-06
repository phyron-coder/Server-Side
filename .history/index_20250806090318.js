const express = require('express');
const bodyParser = require('body-parser');

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


const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());




function getDB(req, res, next) {
    return new Error('Database Error');
}


app.get('/db', (req, res) => {
    throw getDB();
});






// ======================== Users API ========================
app.get('/users/:id', (req, res) => {
    const user = database.users.find(user => user.id === parseInt(req.params.id));
    res.json(user);
});
app.get('/users', (req, res) => {
    res.json(database.users);
});

// ======================== Courses API ========================
app.use(logger);

function logger(req, res, next) {
    // console.log(req);
    console.log('Request URL:', req.rawHeaders[3]);

    // return res.send("Forbidden!");
    next();
}

function authorize(req, res, next) {
    return res.json({
        status: 404,
        message: 'Not Found'
    });
}

function checkId(req, res, next) {
    const courseId = req.params.courseId;
    const course = database.courses.find((item) => {
        return item.id === parseInt(courseId);
    });
    if (!course) {
        return res.status(404).json({
            status: 404,
            message: 'Not Found'
        });
    }
    next();
}



app.get('/courses', logger, (req, res) => {
    return res.send(req.query);
});
app.get('/courses/:courseId', checkId, (req, res) => {
    const courseId = req.params.courseId;
    const course = database.courses.find((item) => {
        return item.id === parseInt(courseId);
    })

    return res.json(course);
});
app.post('/courses', authorize, (req, res) => {
    return res.send(req.body);
});























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

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

