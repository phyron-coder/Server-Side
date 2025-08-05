// CommonJS VS ES6 Modules
// CJS require , Const express = require('express');
// ES6 import , import express from 'express';

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log('Received a request: ', req.url);
    console.log('Request from: ', req.ip);
    console.log('Request : ', req.method);
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
