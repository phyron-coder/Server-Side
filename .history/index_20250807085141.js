const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const asyncHandler = require('express-async-handler');





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




// ========================= Error Handling ========================
function errorHandler(err, req, res, next) {

    return res.status(500).json({
        status: 500,
        message: 'Internal Server Error!',
        error: err.message
    });
}


function getDB(req, res, next) {
    throw new Error('Database Error occurred!');
}


app.get('/db', asyncHandler((req, res, next) => {
    // Simulating a database error
    return getDB();
}));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

app.use(logger);




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
    const id = req.params.id;
    const course = database.courses.find((item) => {
        return item.id === parseInt(id);
    });
    if (!course) {
        return res.status(404).json({
            status: 404,
            message: 'Not Found'
        });
    }
    next();
}



app.get('/courses', asyncHandler((req, res) => {
    return res.send(req.query);
}));

app.get('/allcourses', (req, res) => {
    return res.json(database.courses);
});

app.get('/courses/:id', checkId, (req, res) => {
    const id = req.params.id;
    const course = database.courses.find((item) => {
        return item.id === parseInt(id);
    })

    return res.json(course);
});
app.delete('/courses/:id', checkId, (req, res) => {
    const id = req.params.id;
    let course = database.courses;
    course = course.filter((item) => {
        return item.id !== parseInt(id);
    });
    return res.json({
        status: 200,
        message: 'Course deleted successfully!'
    });
})
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




app.use(errorHandler);



app.listen(3000, () => {
    console.log('Server running on port 3000');
});

