const animeRouter = require('./anime');
const documentRouter = require('./document');
const userRouter = require('./user');
const accessToken = require('../middlewares/access');

function router(app) {
    app.use('/api/anime', accessToken, animeRouter);
    app.use('/api/document', documentRouter);
    app.use('/api/user', userRouter);
}

module.exports = router;