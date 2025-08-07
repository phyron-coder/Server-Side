const mongoose = require('mongoose');

const Course = new mongoose.Schema({
    page: { type: Number },
    title: { type: String },
    description: { type: String },
    image: { type: String },

})