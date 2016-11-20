const utils = require("../../utils/util");

Page({
  data:{
    animationData:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
    var that=this;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay:1000
    });
    animation.opacity(1).translateY(0).step();
    that.setData({
        animationData:animation.export()
      })
  },
  onShow:function(){
    // 5秒后跳转到首页
    setTimeout(function(){
        wx.redirectTo({url:"../index/index",});
        utils.showLoading();
    },5000)
  }
})