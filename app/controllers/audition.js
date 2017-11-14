const Audition = require('../models/audition')
const mongoose = require('mongoose')

exports.addAudition = async (ctx) => {
  const form = ctx.request.body
  const courseId = new mongoose.Types.ObjectId(form.courseId)
  const auditionInfo = {
    course: courseId,
    fromOpenid: form.openid || '',
    studentName: form.studentName,
    phoneNumber: form.phoneNumber,
    birthday: form.birthday,
    parentName: form.parentName,
    gender: form.gender
  }
  const audition = await Audition.create(auditionInfo)
  ctx.body = {
    code: 0,
    audition
  }
}

exports.fetchAudition = async (ctx) => {
  const auditions = await Audition.find().sort({createAt: -1}).populate('course').exec()
  ctx.body = {
    code: 0,
    auditions
  }
}

exports.fetchAuditionsByCourseId = async (ctx) => {
  const {_id} = ctx.request.query
  const auditions = await Audition.find({course: _id}).sort({createAt: -1}).populate('course').exec()
  ctx.body = {
    code: 0,
    auditions
  }
}