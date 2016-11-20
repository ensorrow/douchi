const app = getApp();
const request = require("../../utils/request");
const utils = require("../../utils/util");

Page({
  data:{
    value:"",
    bookList:null,
    count:0
  },
  changeValue(e) {
    this.setData({
      value: e.detail.value //输入框数据绑定
    });
  },
  searchHandel() {
    if(this.data.value.replace(/\s/g,"")){
        this.setData({
            bookList:null
        })
        utils.showLoading();
        request.searchBook({q:this.data.value},(res) => {
            if(res.data.count==0){return;}
            this.setData({bookList:res.data.books,count:this.data.count+res.data.count});
            utils.showLoading(false);
        })
    }else {
      wx.showToast({
        title: '请输入书名',
        icon:"loading"
      })
    }
  },
  toSearch() {
    this.setData({start:0});
    this.searchHandel();
  },
  lower(e) { 
    utils.showLoading();
    var sobj=this.data.bookTag ?{tag:this.data.bookTag,start:this.data.count}:{q:this.data.value,start:this.data.count};
    request.searchBook(sobj,(res) => {
      if(res.data.count==0){return;}
      this.setData({bookList:this.data.bookList.concat(res.data.books),count:this.data.count+res.data.count});
      utils.showLoading(false);
    })
  },  
  onLoad(options) {
    // 页面初始化 options为页面跳转所带来的参数
    if(options.tag){
      this.setData({bookTag:options.tag})
    }
  },
  onReady() {
    // 页面渲染完成    
    utils.showLoading();
    if(this.data.bookTag){
       request.searchBook({tag:this.data.bookTag},(res) => {
            if(res.data.count==0){return;}
            this.setData({bookList:res.data.books,count:this.data.count+res.data.count});
            utils.showLoading(false);      
        })
    }else{
      utils.showLoading(false);
    }
    
  }
})