var app = getApp()
var network = require("../../utils/network.js")
Page({
  data: {

  },
  /**
* 取消带物
*/
  close: function () {
    wx.showModal({
      title: '关闭订单',
      content: '您确认关闭该订单吗',
      confirmText: "再想想",
      cancelText: "关闭订单",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
        } else {
          network.DELAY(function () {
            wx.showModal({
              content: '已为您关闭该订单',
              showCancel: false,
              success: function (res) {
                wx.navigateBack()
              }
            });
          });
        }
      }
    });

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },

})