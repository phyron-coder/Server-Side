const mongoose = require('mongoose');

const Courses = new mongoose.Schema({
    price: { type: Number },
    title: { type: String },
    author: { type: String },
    category: { type: String },
})
const CourseModel = mongoose.model('Course', Courses);

module.exports = CourseModel;