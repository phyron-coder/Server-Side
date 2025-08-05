
import express from 'express';

const database = {
    users: [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]
}

const app = express();
app.use(express.json());

app.get('/users/:id', (req, res) => {
    // console.log(req.params.id);
    // res.send('User ID: ' + req.params.id);
    const user = database.users.find(user => user.id === req.params.id);
    res.json(user);
});









app.get('/', (req, res) => {

    res.send('Hello, Welcome to my Express server and my fullstack app!');
});
app.get('/about', (req, res) => {
    res.json({
        name: 'PPC',
        age: 20,
        city: 'New York',
        country: 'USA'
    })
});
app.post('/about', (req, res) => {
    res.send(req.body);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
