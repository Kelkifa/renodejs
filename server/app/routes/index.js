const animeRouter = require('./anime');
function router(app) {
    app.use('/api/anime', animeRouter);
}

module.exports = router;