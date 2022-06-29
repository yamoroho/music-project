const Router = require('express');
const router = new Router();
const playlistController = require('../controllers/playlistController');

router.post('/', playlistController.create)
router.get('/', playlistController.getAll)


module.exports = router;