
import express from 'express';

const app = express();
app.use(express.json());
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
