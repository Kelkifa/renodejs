const animeRouter = require('./anime');
const documentRouter = require('./document');
const userRouter = require('./user');

function router(app) {
    app.use('/api/anime', animeRouter);
    app.use('/api/document', documentRouter);
    app.use('/api/user', userRouter);
}

module.exports = router;