import { $wuxRater } from '../../components/wux'
var network = require("../../utils/network.js")
var app = getApp()
Page({
  data: {
    userInfo: {},
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
    pro: {
      head: "https://pro.modao.cc/uploads3/images/913/9138950/raw_1493415603.png",
      nickName: '麦芽',
      level: '高级认证',
      from: "马德里",
      to: "重庆",
      deliveryTime: "2017-05-06",//送达时间
      group: "手表装饰,医药器材,名牌箱包",//类别
      weight: "3.5",//重量
      special: "易税,易碎",//特别属性

      value: "3000.00",//包裹价值
      freight: "1000.00"//预计运费

    },
  },
  applyOrder: function () {
    network.DELAY(function () {
      wx.navigateTo({ url: '../getOrderSuccess/getOrderSuccess' })//跳转抢单成功页面
    });
  },
  onLoad: function (res) {//取值
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    //设置星星
    $wuxRater.init('star', {
      value: 4.5,
    })
  }

})