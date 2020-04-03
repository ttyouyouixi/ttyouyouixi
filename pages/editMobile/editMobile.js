import { $wuxCountDown } from '../../components/wux'
var network = require("../../utils/network.js")

Page({
  data: {
    mobile: '',
    vcode: '',
  },

  /**
 * 确认修改
 */
  bindSave: function () {
    network.DELAY(function () {
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 2000,
        complete:function(){
          wx.navigateBack();//返回上一页
        }
      });
     
    });
  },
  /**
   * 更新手机号
   */
  updateMobile: function (e) {
    this.data.mobile = e.detail.value;
  },
  /**
 * 更新验证码
 */
  updateVCode: function (e) {
    this.data.mobile = e.detail.value;
  },

  /**
 * 验证码计时
 */
  vcode() {
    if (this.c2 && this.c2.interval) return !1
    this.c2 = new $wuxCountDown({
      date: +(new Date) + 60000,
      onEnd() {
        this.setData({
          c2: '重新获取验证码',
        })
      },
      render(date) {
        const sec = this.leadingZeros(date.sec, 2) + ' 秒 '
        date.sec !== 0 && this.setData({
          c2: sec,
        })
      },
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
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