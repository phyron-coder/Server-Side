const { json } = require('body-parser');
const CourseModel = require('../model/course');

async function allCourses(req, res) {
    const Courses = await CourseModel.find();
    return res.json(Courses);
}
async function createCourse(req, res) {
    const newCourse = {
        id: req.body.id,
        name: req.body.name
    };
    const exist = await database.courses.some((item) => {
        return item.id === newCourse.id;
    })
    if (exist) {
        return res.status(400).json({
            status: 400,
            message: 'Course with this ID already exists!'
        });
    }
    database.courses.push(newCourse);
    return res.json([
        {
            status: 201,
            message: 'Course added successfully!',
            course: newCourse
        }
    ]);
}
function getCourseById(req, res) {
    const id = req.params.id;
    const course = database.courses.find((item) => {
        return item.id === parseInt(id);
    })
    if (!course) {
        return res.status(404).json({
            status: 404,
            message: 'Course not found with ID:' + id + '!'
        });
    }
    return res.json(course);

}
function updateCourse(req, res) {
    const id = req.params.id;
    const updateCourse = {
        id: req.body.id,
        name: req.body.name
    };
    database.courses = database.courses.filter((item) => {
        return item.id !== parseInt(id);
    });
    database.courses.push(updateCourse);
    return res.json({
        status: 200,
        message: 'Course updated successfully!',
        course: updateCourse
    });
}

function deleteCourse(req, res) {
    const id = req.params.id;

    database.courses = database.courses.filter((item) => {
        return item.id !== parseInt(id);
    });
    return res.json({
        status: 200,
        message: 'Course deleted successfully!'
    });
}

module.exports = { createCourse, getCourseById, deleteCourse, updateCourse, allCourses };