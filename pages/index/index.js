// import { getBookList } from '../../utils/request.js';
const request=require("../../utils/request");
const utils = require("../../utils/util.js");

//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: ["../../static/imgs/banner1.jpg", "../../static/imgs/banner2.jpg"],
    count: 0
  },
  //事件处理函数
  toPersonal() {
    wx.navigateTo({
      url: '../personal/personal'
    });
  },
  onLoad () {    
    //调用应用实例的方法获取全局数据
    app.getUserInfo((userInfo) => {
      //更新数据
      this.setData({
        userInfo
      });
    });
    request.getBookList("129","",(res) => {
      if(res.data.count==0){return;}
      this.setData({
        bookList:res.data.books,
        count:this.data.count+res.data.count
      });
    })
  },
  onReady:function(){
    // 页面渲染完成
    utils.showLoading(false);
  },
  more() {
    utils.showLoading();
    request.getBookList("129", {start: this.data.count}, (res) => {
      if(res.data.count === 0) console.log("没有啦~");
      this.setData({
        bookList: this.data.bookList.concat(res.data.books),
        count: this.data.count + res.data.count     
      });
      utils.showLoading(false);
    });
  }
})
