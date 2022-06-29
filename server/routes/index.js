const Router = require("express")
const router = new Router();
const trackRouter = require("./trackRouter")
const userRouter = require("./userRouter")
const playlistRouter = require("./playlistRouter")
//const albumRouter = require("./albumRouter")


router.use('/music', trackRouter);
router.use('/user', userRouter);
//router.use('/album', albumRouter)
router.use('/playlist', playlistRouter)

module.exports = router;