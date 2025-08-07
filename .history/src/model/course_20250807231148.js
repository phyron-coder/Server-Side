const mongoose = require('mongoose');

const Courses = new mongoose.Schema({
    page: { type: Number },
    title: { type: String },
    genre: { type: String },
    author: { type: String },
    isbn: { type: String },
})
const mongoose

module.exports = mongoose.model('Courses', Courses);