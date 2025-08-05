// CommonJS VS ES6 Modules
// CJS require , Const express = require('express');
// ES6 import , import express from 'express';

import express from 'express';

const app = express();

app.get('/', (req, res) => {

    res.send('Hello, Welcome to my Express server!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
