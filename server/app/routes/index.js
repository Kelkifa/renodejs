const animeRouter = require('./anime');
const documentRouter = require('./document');
const userRouter = require('./user');
const wordRouter = require('./word');
const adminRouter = require('./admin');
const keytrainRouter = require('./keytrain');
const accessToken = require('../middlewares/access');

function router(app) {
    app.use('/api/admin', accessToken, adminRouter);
    app.use('/api/anime', accessToken, animeRouter);
    app.use('/api/word', accessToken, wordRouter);
    app.use('/api/keytrain', keytrainRouter);
    app.use('/api/document', documentRouter);
    app.use('/api/user', userRouter);
}
module.exports = router;