$(function () {
  var token = localStorage.getItem('wechat-token')
  var openid = localStorage.getItem('openid')
  $('.confirm-order-button').on('tap', function () {
    var courseId = $('#courseId').val()
    var form = {
      token,
      openid,
      courseId,
      number: 1,
      payment: '微信',
      studentName: $('#studentName').val(),
      phoneNumber: $('#phoneNumber').val(),
      birthday: $('#birthday').val(),
      parentName: $('#parentName').val(),
      gender: $("input[name='gender']:checked").val()
    }
    console.log(form)
    $.post('/api/orders', form, function (data) {
      if (data.code === 0) {
        window.location.href = '/success'
      }
    })
  })

  $('.confirm-audition-button').on('tap', function () {
    var courseId = $('#courseId').val()
    var form = {
      token,
      courseId,
      studentName: $('#studentName').val(),
      phoneNumber: $('#phoneNumber').val(),
      birthday: $('#birthday').val(),
      parentName: $('#parentName').val(),
      gender: $("input[name='gender']:checked").val()
    }
    $.post('/api/audition', form, function (data) {
      console.log(data)
    })
  })
})