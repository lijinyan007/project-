

{
  var data_id = "";
  Page({
  
    /**
     * 页面的初始数据
     */
    data: {
      hotcommetnt_hidden:false,
      datalist:[],
      hotlist:[]
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      data_id = options.id;
      // console.log(data_id)
      this.refreshNewData();
    },
    refreshNewData: function () {
      wx.showLoading({
        title: "正在加载中……"
      })
      var that = this;
      wx.request({
        url: `https://api.budejie.com/api/api_open.php?a=dataList&c=comment&data_id=${data_id}&hot=1`,
        success: function (res) {
          //console.log(res.data.data[0])

          that.setData({
            datalist: res.data.data,
            hotlist: res.data.hot,
            hotcommetnt_hidden: res.data.hot.length ? false : true
          });
          wx.hideLoading();
        }
      })
     
    },
    
   
  })
}