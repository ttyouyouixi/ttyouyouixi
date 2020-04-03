var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var app = getApp()
var network = require("../../utils/network.js")
// msg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["带物君", "客官"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,

    B_orderList: [],
    C_orderList: []

  },

  /**
   * tab点击事件
   */
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
     * 请求数据
     */
    network.DELAY(function () {
      that.setData({
        B_orderList: [
          {
            avatarUrl: 'https://pro.modao.cc/uploads3/images/898/8984845/raw_1492884442.png',
            nickName: '麦芽',
            state: '已抢单',
            time: '5分钟前',
            orderImageUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2321802262,202449454&fm=26&gp=0.jpg',
            form: '广州',
            to: '马德里',
            weight: 5,
            group: '个性护装',
            price: '100',
            createTime: '2017/6/11',
            progress: 1
          }, {
            avatarUrl: 'https://pro.modao.cc/uploads3/images/898/8984845/raw_1492884442.png',
            nickName: '小人物',
            state: '已抢单',
            time: '5分钟前',
            orderImageUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2321802262,202449454&fm=26&gp=0.jpg',
            form: '广州',
            to: '马德里',
            weight: 5,
            group: '个性护装',
            price: '100',
            createTime: '2017/6/11',
            progress: 2
          }, {
            avatarUrl: 'https://pro.modao.cc/uploads3/images/898/8984845/raw_1492884442.png',
            nickName: '程序员',
            state: '已抢单',
            time: '5分钟前',
            orderImageUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2321802262,202449454&fm=26&gp=0.jpg',
            form: '广州',
            to: '马德里',
            weight: 5,
            group: '个性护装',
            price: '100',
            createTime: '2017/6/11',
            progress: 4
          },
        ],
        C_orderList: [
          {
            avatarUrl: 'https://pro.modao.cc/uploads3/images/898/8984845/raw_1492884442.png',
            nickName: '设计',
            state: '已抢单',
            time: '5分钟前',
            orderImageUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2321802262,202449454&fm=26&gp=0.jpg',
            form: '马德里',
            to: '广州',
            weight: 5,
            group: '个性护装',
            price: '100',
            createTime: '2017/6/11',
            progress: 4
          }, {
            avatarUrl: 'https://pro.modao.cc/uploads3/images/898/8984845/raw_1492884442.png',
            nickName: '产品',
            state: '已抢单',
            time: '5分钟前',
            orderImageUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2321802262,202449454&fm=26&gp=0.jpg',
            form: '马德里',
            to: '广州',
            weight: 5,
            group: '个性护装',
            price: '100',
            createTime: '2017/6/11',
            progress: 5
          }, {
            avatarUrl: 'https://pro.modao.cc/uploads3/images/898/8984845/raw_1492884442.png',
            nickName: '运营',
            state: '已抢单',
            time: '5分钟前',
            orderImageUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2321802262,202449454&fm=26&gp=0.jpg',
            form: '马德里',
            to: '广州',
            weight: 5,
            group: '个性护装',
            price: '100',
            createTime: '2017/6/11',
            progress: 3
          },
        ]
      });
    });

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})