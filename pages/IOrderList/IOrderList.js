var network = require("../../utils/network.js")
Page({
  data: {
    routeList: [],//行程列表
    isB: true//是否B端订单
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
  onLoad: function (options) {
    var that = this;
    that.setData({
      isB: options.type == 1
    });

    wx.setNavigationBarTitle({ title: that.isB ? '带物君订单' : '求带走订单' })
    network.DELAY(function () {
      that.setData({
        routeList: [
          {
            from: '广州',
            to: '马德里',
            time: '2017/6/11',
            weight: 10,
            orderList: [
              {
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
              }
            ]
          },
          {
            from: '广州',
            to: '新西兰',
            time: '2017/5/11',
            weight: 60,
            orderList: [
              {
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
              }
            ]
          }
        ]
      });
    });
  }
})