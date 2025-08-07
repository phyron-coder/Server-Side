const { createCourse, getCourseById, deleteCourse } = require('../controller/course')
const router = express.Router();

router.post('/', createCourse);