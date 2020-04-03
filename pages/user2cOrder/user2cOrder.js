var app = getApp()
var network = require("../../utils/network.js")
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({
  data: {
    tabs: ["进行中", "已完成"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    usercbOrderList: [],//当前列表数据
  },
  onLoad: function (options) {
    var that = this;
    //处理tab切换动画
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    /**
     * 请求列表数据
     */
    network.DELAY(function () {
      that.setData({
        user2cOrderList: that.doingList
      })
    });
  },
  /**
 * tab点击事件
 */
  tabClick: function (e) {
    var that = this;
    network.DELAY(function () {
      that.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id,
        user2cOrderList: e.currentTarget.id && e.currentTarget.id != '0' ? that.finishList : that.doingList

      });
    })

  },

  doingList: [
    {
      image: "https://pro.modao.cc/uploads3/images/914/9148321/raw_1493542564.png",
      id: 0,
      weight: "1",
      group: "箱包",
      price: "50",
      unitPrice: "50",
      fromCity: '马德里',
      toCity: '广州',
      fromDate: '2017-07-30',
      stateName: '待抢单',
      stateWithC: 0
    },
    {
      image: "https://pro.modao.cc/uploads3/images/914/9148321/raw_1493542564.png",
      id: 1,
      weight: "1",
      group: "箱包",
      price: "50",
      unitPrice: "50",
      fromCity: '马德里',
      toCity: '广州',
      fromDate: '2017-07-30',
      stateName: '待同意',
      stateWithC: 1
    },
    {
      image: "https://pro.modao.cc/uploads3/images/914/9148338/raw_1493542678.png",
      id: 2,
      weight: "1",
      group: "箱包",
      price: "50",
      unitPrice: "50",
      fromCity: '马德里',
      toCity: '广州',
      fromDate: '2017-07-30',
      stateName: '待收货',
      stateWithC: 2
    },
    {
      image: "https://pro.modao.cc/uploads2/images/832/8326235/raw_1490270950.jpeg",
      id: 3,
      weight: "1",
      group: "箱包",
      price: "50",
      unitPrice: "50",
      fromCity: '马德里',
      toCity: '广州',
      fromDate: '2017-07-30',
      stateName: '待收货',
      stateWithC: 3
    },
    {
      image: "https://pro.modao.cc/uploads3/images/914/9148406/raw_1493542964.png",
      id: 6,
      weight: "1",
      group: "箱包",
      price: "50",
      unitPrice: "50",
      fromCity: '马德里',
      toCity: '广州',
      fromDate: '2017-07-30',
      stateName: '待关闭',
      stateWithC: 6
    },

  ],
  finishList: [
    {
      image: "https://pro.modao.cc/uploads3/images/914/9148413/raw_1493543011.png",
      id: 4,
      weight: "1",
      group: "箱包",
      price: "50",
      unitPrice: "50",
      fromCity: '马德里',
      fromDate: '2017-07-30',
      toCity: '广州',
      stateName: '已完成',
      stateWithC: 4
    },
    {
      image: "https://pro.modao.cc/uploads3/images/914/9148321/raw_1493542564.png",
      id: 5,
      weight: "1",
      group: "箱包",
      price: "50",
      unitPrice: "50",
      fromCity: '马德里',
      toCity: '广州',
      fromDate: '2017-07-30',
      stateName: '已关闭',
      stateWithC: 5
    },

  ],
})