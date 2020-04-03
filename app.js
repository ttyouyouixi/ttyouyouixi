//app.js

App({
  onLaunch: function () {//小程序初始化话完成,全局只会触发一次
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  /**
   * 全局方法,用于获取用户信息
   */
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzaW5veGsuY29tIiwiaWQiOiI0IiwiZXhwIjoxNDg5OTc2NTgzLCJpYXQiOjE0ODQ3OTI1ODMsImNpZCI6IjEifQ.2mY2xBBiz0zjBhnk79cmXu_SUl2zqxJQ-1YmEHnD_Wg",
    userInfo: null,
     eventsKey: [
      {
        title: "甄选物主",
        productList: [{
          id: "28139046",
          image: "https://img1.doubanio.com/view/event_poster/median/public/87391a888ae585b.jpg",
          title: "早鸟票半价︱第7届广州艺术交易博览会万件精品唤醒你的艺术细胞",
          time_str: "2017.05.18 周四 起"
        }, {
          id: "28139047",
          image: "https://img1.doubanio.com/view/event_poster/median/public/87391a888ae585b.jpg",
          title: "早鸟票半价︱第7届广州艺术交易博览会万件精品唤醒你的艺术细胞",
          time_str: "2017.05.18 周四 起"
        }, {
          id: "28139048",
          image: "https://img1.doubanio.com/view/event_poster/median/public/87391a888ae585b.jpg",
          title: "早鸟票半价︱第7届广州艺术交易博览会万件精品唤醒你的艺术细胞",
          time_str: "2017.05.18 周四 起"
        }, {
          id: "28139049",
          image: "https://img1.doubanio.com/view/event_poster/median/public/87391a888ae585b.jpg",
          title: "早鸟票半价︱第7届广州艺术交易博览会万件精品唤醒你的艺术细胞",
          time_str: "2017.05.18 周四 起"
        }]
      }, {
        title: "附近的人",
        productList: [{
          id: "28639971",
          image: "https://img3.doubanio.com/view/event_poster/median/public/26693ac490054d4.jpg",
          title: "Live 4 LIVE《尖叫现场》·手嶌葵天籁之音演唱会-广州站",
          time_str: "2017.06.02 周五"
        }, {
          id: "28639972",
          image: "https://img3.doubanio.com/view/event_poster/median/public/26693ac490054d4.jpg",
          title: "Live 4 LIVE《尖叫现场》·手嶌葵天籁之音演唱会-广州站",
          time_str: "2017.06.02 周五"
        }, {
          id: "28639973",
          image: "https://img3.doubanio.com/view/event_poster/median/public/26693ac490054d4.jpg",
          title: "Live 4 LIVE《尖叫现场》·手嶌葵天籁之音演唱会-广州站",
          time_str: "2017.06.02 周五"
        }, {
          id: "28639974",
          image: "https://img3.doubanio.com/view/event_poster/median/public/26693ac490054d4.jpg",
          title: "Live 4 LIVE《尖叫现场》·手嶌葵天籁之音演唱会-广州站",
          time_str: "2017.06.02 周五"
        }]  //推荐列表,目前只有两个
      }]
  }
})