function errorHandler(err, req, res, next) {

    return res.status(500).json({
        status: 500,
        message: 'Internal Server Error!',
        error: err.message
    });
}
function logger(req, res, next) {
    console.log('Request URL:', req.rawHeaders[3]);
    next();
}
function authorize(req, res, next) {
    return res.json({
        status: 404,
        message: 'Not Found'
    });
}
function checkId(req, res, next) {
    const id = req.params.id;
    const course = database.courses.find((item) => {
        return item.id === parseInt(id);
    });
    if (!course) {
        return res.status(404).json({
            status: 404,
            message: 'Not Found with ID:' + id
        });
    }
    next();
}

module.exports = {
    errorHandler,
    logger,
    authorize,
    checkId
};