var app = getApp()
var network = require("../../utils/network.js")
Page({
  data: {

  },
  onLoad: function (options) {
    var that = this;
    /**
     * 请求列表数据
     */
    network.DELAY(function () {
      that.setData({
        orderList: [
          {
            image: "https://pro.modao.cc/uploads3/images/914/9148321/raw_1493542564.png",
            id: 1,
            weight: "1kg",
            group: "箱包",
            price: "50",
            unitPrice: "50",
            fromCity: '马德里',
            toCity: '广州',
          },
          {
            image: "https://pro.modao.cc/uploads3/images/914/9148338/raw_1493542678.png",
            id: 2,
            weight: "1kg",
            group: "箱包",
            price: "50",
            unitPrice: "50",
            fromCity: '马德里',
            toCity: '广州',
          },
          {
            image: "https://pro.modao.cc/uploads2/images/832/8326235/raw_1490270950.jpeg",
            id: 3,
            weight: "1kg",
            group: "箱包",
            price: "50",
            unitPrice: "50",
            fromCity: '马德里',
            toCity: '广州',
          },
          {
            image: "https://pro.modao.cc/uploads3/images/914/9148413/raw_1493543011.png",
            id: 4,
            weight: "1kg",
            group: "箱包",
            price: "50",
            unitPrice: "50",
            fromCity: '马德里',
            toCity: '广州',
          },
          {
            image: "https://pro.modao.cc/uploads3/images/914/9148321/raw_1493542564.png",
            id: 5,
            weight: "1kg",
            group: "箱包",
            price: "50",
            unitPrice: "50",
            fromCity: '马德里',
            toCity: '广州',
          },
          {
            image: "https://pro.modao.cc/uploads3/images/914/9148406/raw_1493542964.png",
            id: 6,
            weight: "1kg",
            group: "箱包",
            price: "50",
            unitPrice: "50",
            fromCity: '马德里',
            toCity: '广州',
          },
        ],
      })
    });
  },

})