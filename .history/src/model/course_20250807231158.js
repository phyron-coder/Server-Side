const mongoose = require('mongoose');

const Courses = new mongoose.Schema({
    page: { type: Number },
    title: { type: String },
    genre: { type: String },
    author: { type: String },
    isbn: { type: String },
})
const CourseModel = mongoose.model('Course', Courses);

module.exports = CourseModel;