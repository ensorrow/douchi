function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//判断传入的对象是否是函数
function isFunction(obj) { 
  return typeof obj === 'function';
}

function showLoading(toShow=true) {
  if(toShow) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
  } else{
    wx.hideToast()
  }
}

module.exports = {
  formatTime,
  isFunction,
  showLoading
}
