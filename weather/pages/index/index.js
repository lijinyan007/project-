
var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
var lon=0;
var lat=0;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //天气类别
    todayList:"",
    futureList:"",
    sk:"",
    f_date:"",
    currentdistrict:""
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(this.data)

    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        // console.log(res.latitude)
        lat = res.latitude;
        lon = res.longitude;
        // console.log(res.latitude)
        that.getCurLocation();
        // console.log(lat.toString())
        wx.request({
          url: `https://v.juhe.cn/weather/geo?format=2&key=ccb283234abc8ef8dd513b8af424666e&lon=${lon.toString()} &lat=${lat.toString()}`,
          success: function (res) {
            console.log(res)
            
            that.setData({
              todayList: res.data.result.today,
              futureList: res.data.result.future.slice(1),
              sk: res.data.result.sk,
            })
          }
        })
      }
    })
    console.log("jsdkfkdv".slice(2,6))
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
  // 逆解析地址
  getCurLocation: function () {
    var that = this;
    // 实例化API核心类
    var demo = new QQMapWX({
      key: 'AS3BZ-WGZ3P-7ZADJ-VNMJN-4UBSV-BMBHX'
    });
    // 调用接口
    demo.reverseGeocoder({
      location: {
        latitude: lat,
        longitude:lon
      },
      success: function (res) {
        console.log(res);
        that.setData({
          currentdistrict: res.result.address_component.district
        })
      }

    });
  },
  detailTap:function(){
    wx.navigateTo({
      url:"./detail/detail"
    })
  }
})