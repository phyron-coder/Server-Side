const createCourse = require('../controller/course')
const router = express.Router();

router.post('/', createCourse);