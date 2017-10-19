const router = require('koa-router')()
const jwt = require('../middlewares/jwtMiddle')
const userRoutes = require('./user')
const teacherRoutes = require('./teacher')
const campusRoutes = require('./campus')
const courseRoutes = require('./course')
const studentRoutes = require('./student')
const orderRoutes = require('./order')
const wechatUserRoutes = require('./wechatUser')
const auditionRoutes = require('./audition')
const commentRoutes = require('./comment')
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
router.get('/success', wechat.success)

// cms api
router.use('/api', jwt(), userRoutes.routes())
router.use('/api', jwt(), teacherRoutes.routes())
router.use('/api', jwt(), campusRoutes.routes())
router.use('/api', jwt(), courseRoutes.routes())
router.use('/api', jwt(), studentRoutes.routes())
router.use('/api', jwt(), orderRoutes.routes())
router.use('/api', jwt(), wechatUserRoutes.routes())
router.use('/api', jwt(), auditionRoutes.routes())
router.use('/api', jwt(), commentRoutes.routes())

module.exports = router
