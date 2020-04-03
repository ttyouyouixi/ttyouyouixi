//index.js
var app = getApp()
var network = require("../../utils/network.js")

var mapkey = 'OSWBZ-PYKKP-TWZDI-LTXJX-CJRO7-EMBMD';
var qqMapUrl = 'http://apis.map.qq.com/ws/geocoder/v1/';

Page({
  data: {
    banners: [],//轮播图数据源,
    cityName: '城市',
  },
  onLoad: function () {
    var that = this
    network.GET('data/福利/10/1', {}, function (resData) {
      that.setData({
        banners: resData.results
      })
    });
    that.getLocation();

  },

  // 搜索
  routeSearch: function () {
    wx.navigateTo({ url: '../selectCity/selectCity?type=0&selectedCityName='+this.data.cityName })
  },
  //fromCity
  selectFrom: function () {
    wx.navigateTo({ url: '../fromToFilter/fromToFilter?fromCityName='+this.data.cityName })
  },
  //toCity
  selectTo: function () {
    wx.navigateTo({ url: '../fromToFilter/fromToFilter?toCityName='+this.data.cityName  })
  },

  getLocation: function () {
    var that = this
    //小程序api获取经纬度
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        //调用腾讯地图进行地质逆向解析
        network.GET(qqMapUrl + '?location=' + latitude + ',' + longitude + '&key=' + mapkey, {}, function (resData) {
          that.setData({
            cityName: resData.result.address_component.city,//城市
          })
        });
      }
    })

  }
})
