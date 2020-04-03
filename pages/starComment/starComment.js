import { $wuxRater } from '../../components/wux'
var network = require("../../utils/network.js")
Page({
  data: {},
  onLoad() {
    $wuxRater.init('star1', {
      value: 4,
    });
    $wuxRater.init('star2', {
      value: 4,
    });
    $wuxRater.init('star3', {
      value: 4,
    })

  },
  commit: function () {
    network.DELAY(function () {
      wx.showModal({
        content: "评价完成",
        showCancel: false,
        success: function (res) {
          wx.navigateBack()//返回列表页
        }
      });
    });
  }

})