var app = getApp()
var network = require("../../utils/network.js")
import { $wuxRater } from '../../components/wux'
Page({
  data: {
    banners: [],
    commentList: []

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
        commentList: [
          {
            id: '1',
            avatar: 'https://pro.modao.cc/uploads3/images/898/8984845/raw_1492884442.png',
            nickName: '麦芽',
            desc: '人超级好!包装很整齐,守信用',
          }, {
            id: '2',
            avatar: 'https://pro.modao.cc/uploads3/images/913/9138950/raw_1493415603.png',
            nickName: 'banana',
            desc: '很准时!东西如数送达',
          }, {
            id: '3',
            avatar: 'https://pro.modao.cc/uploads3/images/898/8984845/raw_1492884442.png',
            nickName: '麦芽',
            desc: '人超级好!包装很整齐,守信用',
          }, {
            id: '4',
            avatar: 'https://pro.modao.cc/uploads3/images/913/9138950/raw_1493415603.png',
            nickName: 'banana',
            desc: '很准时!东西如数送达',
          }
        ]

      });
    });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})