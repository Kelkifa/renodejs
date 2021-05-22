const animeRouter = require('./anime');
const documentRouter = require('./document');

function router(app) {
    app.use('/api/anime', animeRouter);
    app.use('/api/document', documentRouter);
}

module.exports = router;