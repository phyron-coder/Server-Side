
const express = require('express');
const { createCourse, getCourseById, deleteCourse, updateCourse, allCourses } = require('../controller/course')
const router = express.Router();

router.get('/', allCourses);
router.post('/', createCourse);
router.get('/:id', getCourseById);
router.delete('/:id', deleteCourse);
router.put('/:id', updateCourse);

module.exports = router;