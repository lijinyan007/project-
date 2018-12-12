{Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var that=this;
    wx.getUserInfo({
      success:function(res){
        var { nickName, avatarUrl }=res.userInfo;
        that.setData({ nickName,avatarUrl });
      }
    })
  },
  onTap:function(){
    wx.switchTab({
      url: '/pages/index/index'
    })
     console.log(1)
  }
   
   
})}