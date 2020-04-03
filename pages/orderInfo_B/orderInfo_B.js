var app = getApp()
var network = require("../../utils/network.js")
Page({
  data: {

  },
  /**
* 取消带物
*/
  cancelOrder: function () {
    wx.showModal({
      title: '取消带物',
      content: '确认不接这笔带物订单吗',
      confirmText: "再想想",
      cancelText: "取消接单",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
        } else {
          network.DELAY(function () {
            wx.showModal({
              content: '已为您取消该带物订单',
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