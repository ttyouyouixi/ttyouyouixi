Page({
  data: {
    inputShowed: true,
    inputVal: "",
    txtList: [
      '广州 (中国-广东)',
      '深圳 (中国-广东)',
      '马德里  (欧洲-西班牙)'
    ]
  },
  itemClick: function (e) {
    wx.navigateBack()
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});