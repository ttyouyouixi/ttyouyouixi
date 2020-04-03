var app = getApp()
var network = require("../../utils/network.js")
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var util = require("../../utils/util.js")
Page({
  data: {
    tabs: ["进行中", "已完成"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    user2bOrderList: [],//当前列表数据
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
        user2bOrderList: that.doingList
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
        user2bOrderList: e.currentTarget.id && e.currentTarget.id != '0' ? that.finishList : that.doingList

      });
    })

  },

  doingList: [
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
      stateName: '已发起',
      stateWithB: 1
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
      stateName: '已同意',
      stateWithB: 2
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
      stateName: '待取消',
      stateWithB: 3
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
      stateName: '已同意',
      stateWithB: 6
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
      stateWithB: 4
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
      stateWithB: 5
    },

  ],
})