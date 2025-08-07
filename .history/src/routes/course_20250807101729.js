const { createCourse, getCourseById, deleteCourse, updateCourse, allCourses } = require('../controller/course')
const router = express.Router();

router.post('/', createCourse);
router.get('/:id', getCourseById);
router.delete('/:id', deleteCourse);


module.exports = router;