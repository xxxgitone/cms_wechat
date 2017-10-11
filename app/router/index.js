const router = require('koa-router')()
// const jwt = require('../middlewares/jwtMiddle')
const userRoutes = require('./user')
const teacherRoutes = require('./teacher')
const campusRoutes = require('./campus')
const courseRoutes = require('./course')
const studentRoutes = require('./student')
const orderRoutes = require('./order')
const game = require('../controllers/game')
const wechat = require('../controllers/wechat')

// cms server & wechat
router.get('/movie', game.movie)
router.get('/index', wechat.index)
router.get('/oauth', wechat.oauth)
router.get('/wx', wechat.hear)
router.post('/wx', wechat.hear)
router.get('/course/:id', wechat.courseDetial)
router.get('/course/order/detail', wechat.orderDetail)

// cms api
router.use('/api', userRoutes.routes())
router.use('/api', teacherRoutes.routes())
router.use('/api', campusRoutes.routes())
router.use('/api', courseRoutes.routes())
router.use('/api', studentRoutes.routes())
router.use('/api', orderRoutes.routes())

module.exports = router
