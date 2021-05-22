const animeModel = require('../models/anime');

class AnimeController {
    index(req, res, next) {
        animeModel.find()
            .then(animes => {
                res.json(animes);
            })
    }
}

module.exports = new AnimeController;