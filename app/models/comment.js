const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const CommentSchema = new Schema({
  course: {
    type: ObjectId, 
    ref: 'Course'
  },
  from: {
    type: ObjectId, 
    ref: 'WechatUser'
  },
  reply: [{
    from: {
      type: ObjectId, 
      ref: 'User'
    },
    to: {
      type: ObjectId, 
      ref: 'WechatUser'
    },
    content: String,
    createAt: {
      type: Date,
      default: Date.now()
    }
  }],
  content: String,
  createAt: {
    type: Date,
    default: Date.now()
  },
  type: String,
  isRead: {
    type: Boolean,
    default: false
  }
})

CommentSchema.static('fetchCommentsByCourseId', function(id, type, cb) {
  return this
    .find({course: id, type: type})
    .sort({createAt: -1})
    .populate('course')
    .populate('from')
    .populate('reply.from')
    .exec(cb)
})

CommentSchema.static('fetchCommentsByType', function (type, cb) {
  return this
    .find({type: type})
    .sort({createAt: -1})
    .populate('course')
    .populate('from')
    .exec(cb)
})

const Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment
