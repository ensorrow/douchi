//logs.js
const util = require('../../utils/util.js')
const app = getApp();
const _G_ = app.globalData;

Page({
  data: {
    userInfo: {}
  },
  onLoad: function () {
    this.setData({
      userInfo: _G_.userInfo
    })
  }
})
