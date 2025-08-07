

function createCourse(req, res) {
    const newCourse = {
        id: req.body.id,
        name: req.body.name
    };
    const exist = database.courses.some((item) => {
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