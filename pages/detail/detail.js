const request = require("../../utils/request");
const util = require("../../utils/util");

Page({
	data: {
		bookInfo: {},
		showDetail: false
	},
	onLoad(options) {
		let currentId = options.id; //路由参数
		util.showLoading();
		request.getBookById(currentId, (res) => {
	      this.setData({ bookInfo: res.data });
	    });	    
	},
	onReady() {
		util.showLoading(false);
	},
	extendBox() {
		let tmp = !this.data.showDetail;
		this.setData({showDetail: tmp})
	}
})
