var network = require("../../utils/network.js")
//获取应用实例
var app = getApp()
Page({
  data: {
    sexList: ['男', '女'],
    sexIndex: 0,//当前选择的性别0=男  1=女

    mobile: '',
    realName: '',
  },
  /**
   * 性别切换
   */
  bindSexChange: function (e) {
    this.setData({
      sexIndex: e.detail.value
    })
  },
  /**
 * 确认修改
 */
  bindSave: function () {
    network.DELAY(function () {
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 2000
      });
      wx.navigateBack();//返回上一页
    });
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})