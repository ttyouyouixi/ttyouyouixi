var network = require("../../utils/network.js")
var util = require("../../utils/util.js")
import { $wuxRater } from '../../components/wux'
Page({
  data: {
    orderbean: {}
  },
  onLoad: function (options) {
    //设置星星
    $wuxRater.init('star', {
      value: 3,
      fontSize: 15,
      disabled: !0,
    })
    var that = this
    var stateCode = options.stateCode
    // 页面初始化 options为页面跳转所带来的参数
    network.DELAY(function () {
      that.setData({
        orderbean: {
          userCNickName: '麦芽',
          productName: 'YSL星空限量10支',
          extra: '易碎,怕高温',
          stateName: util.orderStateConvert(stateCode, 2),
          price: 100,
          No: 1234567890,
          startDate: '2017-7-30',
          fromCity: '马德里',
          toCity: '广州',
          state: stateCode,
          image: 'https://pro.modao.cc/uploads3/images/914/9148321/raw_1493542564.png'
        }
      })
    })

  },
  /**
   * 订单操作
   */
  orderAction: function () {
    switch (this.data.orderbean.state) {
      case '1':
        this.actionWithCancel();
        break
      case '2':
        this.actionWithCancel();
        break
      case '3':
        this.actionWithCall();
        break
      case '4':
        this.actionWithComment();
        break
    }
  },
  /**
   * 取消带物
   */
  actionWithCancel: function () {
    var that = this;
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
              content: that.data.orderbean.state == "1" ? "已为您取消带物" : "取消申请已提交,请耐心等待用户同意",
              showCancel: false,
              success: function (res) {
                wx.redirectTo({ url: "../User2bOrderInfo/User2bOrderInfo?stateCode=" + (that.data.orderbean.state == "1" ? '5' : '3') })
              }
            });
          });
        }
      }
    });

  },
  /**
   * 联系客服
   */
  actionWithCall: function () {
    wx.makePhoneCall({
      phoneNumber: '17712345678'
    })
  },
  actionWithComment: function () {
    wx.redirectTo({ url: "../starComment/starComment" })

  }

})