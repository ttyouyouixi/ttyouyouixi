var util = require('../../utils/util.js');
Page({
  data: {
    startDate: '',
    fromDate: '',//出发日期
    fromCityName: '',//出发城市
    toCityName: '',//到达城市
  },
  onLoad: function (options) {

    this.setData({
      fromCityName: options.fromCityName,
      toCityName: options.toCityName,
      startData: util.getCurrentDate(),
      fromDate: util.getCurrentDate()
    })
  },
  bindDateChange: function (e) {
    this.setData({
      fromDate: e.detail.value
    })
  },
  /**
   * 跳转订单列表
   */
  goOrderList: function () {
    wx.navigateTo({
      url: '../orderList/orderList?date=' + this.data.fromDate + '&fromCityName=' + this.data.fromCityName + '&toCityName=' + this.data.toCityName
    })
  }
})