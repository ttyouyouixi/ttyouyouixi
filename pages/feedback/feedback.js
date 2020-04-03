var network = require("../../utils/network.js")
Page({
  data: {

  },
  sendService: function () {
    network.DELAY(function () {
      wx.showModal({
        title: '成功',
        content: '您的反馈我们已收到',
        showCancel: false,
        success: function (res) {
          wx.navigateBack();
        }
      });
    });
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: '反馈我们' });
    // 页面初始化 options为页面跳转所带来的参数
  }

})