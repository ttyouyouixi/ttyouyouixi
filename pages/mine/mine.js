import { $wuxRater } from '../../components/wux'
var network = require("../../utils/network.js")
//获取应用实例
var app = getApp()
Page({
  data: {
    pro: {
      level: '高级认证'
    },
    B_orderList: [],//带物君订单列表
    C_orderList: [],//求带走订单列表
  },
  /**
 * 跳转B端订单详情
 */
  itemClick_B: function () {
    wx.navigateTo({ url: '../orderInfo_B/orderInfo_B' })
  },
  /**
   * 跳转C端订单详情
   */
  itemClick_C: function () {
    wx.navigateTo({ url: '../orderInfo_C/orderInfo_C' })
  },

  onLoad: function () {
    var that = this
    network.DELAY(function () {
      that.setData({
        B_orderList: [{
          image: "https://pro.modao.cc/uploads3/images/914/9148321/raw_1493542564.png",
          weight: "1kg",
          group: "箱包",
          price: "¥50",
          unitPrice: "50",
          state: '已发起'
        },
        {
          image: "https://pro.modao.cc/uploads3/images/914/9148338/raw_1493542678.png",
          weight: "1kg",
          group: "箱包",
          price: "¥50",
          unitPrice: "50",
          state: '待发货'
        },
        {
          image: "https://pro.modao.cc/uploads2/images/832/8326235/raw_1490270950.jpeg",
          weight: "1kg",
          group: "箱包",
          price: "¥50",
          unitPrice: "50",
          state: '已收货'
        },
        {
          image: "https://pro.modao.cc/uploads3/images/914/9148413/raw_1493543011.png",
          weight: "1kg",
          group: "箱包",
          price: "¥50",
          unitPrice: "50",
          state: '已发起'
        },
        {
          image: "https://pro.modao.cc/uploads3/images/914/9148321/raw_1493542564.png",
          weight: "1kg",
          group: "箱包",
          price: "¥50",
          unitPrice: "50",
          state: '交易完成'
        },
        {
          image: "https://pro.modao.cc/uploads3/images/914/9148406/raw_1493542964.png",
          weight: "1kg",
          group: "箱包",
          price: "¥50",
          unitPrice: "50",
          state: '关闭'
        }],
        C_orderList: [{
          image: "https://pro.modao.cc/uploads3/images/914/9148321/raw_1493542564.png",
          weight: "1kg",
          group: "箱包",
          price: "¥50",
          unitPrice: "50",
          state: '已发起'
        },
        {
          image: "https://pro.modao.cc/uploads3/images/914/9148338/raw_1493542678.png",
          weight: "1kg",
          group: "箱包",
          price: "¥50",
          unitPrice: "50",
          state: '待发货'
        },
        {
          image: "https://pro.modao.cc/uploads2/images/832/8326235/raw_1490270950.jpeg",
          weight: "1kg",
          group: "箱包",
          price: "¥50",
          unitPrice: "50",
          state: '已收货'
        },
        {
          image: "https://pro.modao.cc/uploads3/images/914/9148413/raw_1493543011.png",
          weight: "1kg",
          group: "箱包",
          price: "¥50",
          unitPrice: "50",
          state: '已发起'
        },
        {
          image: "https://pro.modao.cc/uploads3/images/914/9148321/raw_1493542564.png",
          weight: "1kg",
          group: "箱包",
          price: "¥50",
          unitPrice: "50",
          state: '交易完成'
        },
        {
          image: "https://pro.modao.cc/uploads3/images/914/9148406/raw_1493542964.png",
          weight: "1kg",
          group: "箱包",
          price: "¥50",
          unitPrice: "50",
          state: '关闭'
        }]
      })
    });
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
