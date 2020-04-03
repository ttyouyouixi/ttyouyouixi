//index.js
//获取应用实例
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var app = getApp()
var network = require("../../utils/network.js")

Page({
  onReachBottom: function () {
    // this.data.pageNum++;
    // this.requestData();
  },
  onPullDownRefresh: function () {
    this.data.pageNum = 1;
    this.requestData();
  },
  data: {
    tabs: ["0-5 kg", "5-10 kg", "超过10 kg", "整箱"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    //以上为tab数据
    banners: [],//轮播图数据源,
    pageNum: 1,//当前页码
    listData: [],//列表数据
    orderList: [
      {
        image: "https://pro.modao.cc/uploads3/images/914/9148321/raw_1493542564.png",
        weight: "1kg",
        Deadline: "2017.05.18前",
        group: "箱包",
        price: "¥50",
        distance: "1km",
        unitPrice: "50",
        comment: "10",
        editTime: "2017.05.18"
      },
      {
        image: "https://pro.modao.cc/uploads3/images/914/9148338/raw_1493542678.png",
        weight: "1kg",
        Deadline: "2017.05.18前",
        group: "箱包",
        price: "¥50",
        distance: "1km",
        unitPrice: "50",
        comment: "10",
        editTime: "2017.05.18"
      },
      {
        image: "https://pro.modao.cc/uploads2/images/832/8326235/raw_1490270950.jpeg",
        weight: "1kg",
        Deadline: "2017.05.18前",
        group: "箱包",
        price: "¥50",
        distance: "1km",
        unitPrice: "50",
        comment: "10",
        editTime: "2017.05.18"
      },
      {
        image: "https://pro.modao.cc/uploads3/images/914/9148413/raw_1493543011.png",
        weight: "1kg",
        Deadline: "2017.05.18前",
        group: "箱包",
        price: "¥50",
        distance: "1km",
        unitPrice: "50",
        comment: "10",
        editTime: "2017.05.18"
      },
      {
        image: "https://pro.modao.cc/uploads3/images/914/9148321/raw_1493542564.png",
        weight: "1kg",
        Deadline: "2017.05.18前",
        group: "箱包",
        price: "¥50",
        distance: "1km",
        unitPrice: "50",
        comment: "10",
        editTime: "2017.05.18"
      },
      {
        image: "https://pro.modao.cc/uploads3/images/914/9148406/raw_1493542964.png",
        weight: "1kg",
        Deadline: "2017.05.18前",
        group: "箱包",
        price: "¥50",
        distance: "1km",
        unitPrice: "50",
        comment: "10",
        editTime: "2017.05.18"
      },
    ],
    eventsKey: [
      {
        title: "甄选物主",
        productList: [{
          id: "28139046",
          image: "https://pro.modao.cc/uploads3/images/914/9148321/raw_1493542564.png",
          title: "早鸟票半价︱第7届广州艺术交易博览会万件精品唤醒你的艺术细胞",
          time_str: "2017.05.18 周四 起",
          weight: "1kg",
          Deadline: "2017.05.18前",
          group: "箱包",
          price: "¥50"
        }, {
          id: "28139047",
          image: "https://pro.modao.cc/uploads3/images/914/9148338/raw_1493542678.png",
          title: "早鸟票半价︱第7届广州艺术交易博览会万件精品唤醒你的艺术细胞",
          time_str: "2017.05.18 周四 起",
          weight: "1kg",
          Deadline: "2017.05.18前",
          group: "箱包",
          price: "¥50"
        }, {
          id: "28139048",
          image: "https://pro.modao.cc/uploads2/images/832/8326235/raw_1490270950.jpeg",
          title: "早鸟票半价︱第7届广州艺术交易博览会万件精品唤醒你的艺术细胞",
          time_str: "2017.05.18 周四 起",
          weight: "1kg",
          Deadline: "2017.05.18前",
          group: "箱包",
          price: "¥50"
        }, {
          id: "28139049",
          image: "https://pro.modao.cc/uploads3/images/914/9148413/raw_1493543011.png",
          title: "早鸟票半价︱第7届广州艺术交易博览会万件精品唤醒你的艺术细胞",
          time_str: "2017.05.18 周四 起",
          weight: "1kg",
          Deadline: "2017.05.18前",
          group: "箱包",
          price: "¥50"
        }]
      }, {
        title: "附近的人",
        productList: [{
          id: "28639971",
          image: "https://pro.modao.cc/uploads3/images/914/9148391/raw_1493542839.png",
          title: "Live 4 LIVE《尖叫现场》·手嶌葵天籁之音演唱会-广州站",
          time_str: "2017.06.02 周五",
          weight: "1kg",
          Deadline: "2017.05.18前",
          group: "箱包",
          price: "¥50"
        }, {
          id: "28639972",
          image: "https://pro.modao.cc/uploads3/images/914/9148406/raw_1493542964.png",
          title: "Live 4 LIVE《尖叫现场》·手嶌葵天籁之音演唱会-广州站",
          time_str: "2017.06.02 周五",
          weight: "1kg",
          Deadline: "2017.05.18前",
          group: "箱包",
          price: "¥50"
        }, {
          id: "28639973",
          image: "https://pro.modao.cc/uploads3/images/914/9148321/raw_1493542564.png",
          title: "Live 4 LIVE《尖叫现场》·手嶌葵天籁之音演唱会-广州站",
          time_str: "2017.06.02 周五",
          weight: "1kg",
          Deadline: "2017.05.18前",
          group: "箱包",
          price: "¥50"
        }, {
          id: "28639974",
          image: "https://pro.modao.cc/uploads3/images/914/9148338/raw_1493542678.png",
          title: "Live 4 LIVE《尖叫现场》·手嶌葵天籁之音演唱会-广州站",
          time_str: "2017.06.02 周五",
          weight: "1kg",
          Deadline: "2017.05.18前",
          group: "箱包",
          price: "¥50"
        }]  //推荐列表,目前只有两个
      }]
  },
  itemClick: function (event) {
    var proId = event.target.dataset.proid;
    wx.navigateTo({
      url: '../info/info?id=' + proId
    })

  },
  requestData() {
    var that = this
    network.GET('data/福利/10/' + this.data.pageNum, {}, function (resData) {
      if (that.data.pageNum == 1) {
        that.data.listData = []//清空数组
      }
      var list = that.data.listData;
      for (var i = 0; i < resData.results.length; i++) {
        list.push(resData.results[i]);
      }
      that.setData({
        listData: list,//更新数据
        banners: that.data.listData.slice(0, Math.min(9, that.data.listData.length))//截取数组
      })
    })
  },
  //处理重量筛选
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id,
    });
    this.requestData();
    // wx.showToast({
    //   title: '选中' + (this.data.activeIndex),
    //   duration: 1000
    // })
  },
  // 跳转搜索
  routeSearch: function () {
    wx.navigateTo({
      url: '../search/search?type=1'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function (userInfo) {
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    //   that.update()
    // })
    this.requestData();
    var that = this;
    //处理tab位置
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

  }
})
