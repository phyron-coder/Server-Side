const mongoose = require('mongoose');

const Courses = new mongoose.Schema({
    price: { type: Number },
    : { type: String },
genre: { type: String },
author: { type: String },
isbn: { type: String },
})
const CourseModel = mongoose.model('Course', Courses);

module.exports = CourseModel;