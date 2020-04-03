import { $wuxRater } from '../../components/wux'
var network = require("../../utils/network.js")
var app = getApp()
Page({
  data: {
    banners: [],
    orderBean: {},
  },
  /**
   * 申请接单
   */
  applyOrder: function () {
    network.DELAY(function () {
      wx.navigateTo({ url: '../getOrderSuccess/getOrderSuccess' })//跳转抢单成功页面
    });
  },
  /**
 * 抢单失效
 */
  applyOrderFail: function () {
    network.DELAY(function () {
      wx.redirectTo({ url: '../getOrderFail/getOrderFail' })//跳转抢单失败页面
    });
  },
  /**
 * 未认证
 */
  applyOrderAuth: function () {
    network.DELAY(function () {
      wx.showModal({
        content: '您需要先认证手机号才能接单',
        showCancel: false,
        success: function (res) {
          wx.navigateTo({ url: '../editMobile/editMobile' })//跳转抢单去认证页面
        }
      });

    });
  },
  onLoad: function (res) {//取值
    var that = this
    network.DELAY(function () {
      that.setData({
        banners: [
          {
            url: "https://pro.modao.cc/uploads3/images/928/9287140/raw_1494013826.png",
            id: 1
          },
          {
            url: "https://pro.modao.cc/uploads3/images/928/9287141/raw_1494013839.png",
            id: 1
          }
        ],
        orderBean: {
          head: "https://pro.modao.cc/uploads3/images/913/9138950/raw_1493415603.png",
          nickName: '麦芽',
          level: '高级认证',
          from: "马德里",
          to: "重庆",
          star: 4.5,
          group: "手表装饰,医药器材,名牌箱包",//类别
          weight: "3.5",//重量
          special: "易税,易碎",//特别属性
          freight: "1000.00",//预计运费
          orderContent: '里面都是化妆品,带物君路上注意不要损坏哦'

        },
      })
    })
    //设置星星
    $wuxRater.init('star', {
      value: thia.data.orderBean.star,
    })
  }

})