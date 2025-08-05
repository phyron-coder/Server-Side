import express from 'express';
import bodyParser from 'body-parser';

const database = {
    users: [
        { id: 1, name: 'Phon Phyron', email: 'phonphyron@example.com' },
        { id: 2, name: 'Huon Theavy', email: 'huontheavy@example.com' }
    ]
};

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// ============================ Users API ==============================

app.get('/users/:id', (req, res) => {
    const user = database.users.find(user => user.id === parseInt(req.params.id));
    res.json(user);
});

app.get('/users', (req, res) => {
    res.json(database.users);
});

// ============================ Courses API ==============================
// (you can add more later)

// ============================ Static Routes ==============================

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
