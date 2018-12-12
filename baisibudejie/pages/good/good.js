// pages/good/good.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      leftList:[],
      rightList:[],
      currentId:""

  },
  addAttentionTap: function (e) {
    console.log(e.target.dataset.index)
    var { header, screen_name, fans_count } = this.data.rightList[e.target.dataset.index];
    var item = { header, screen_name, fans_count };
    var data = wx.getStorageSync("attention") ? wx.getStorageSync("attention"):[];
    wx.setStorageSync("attention", data.concat(item));

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://api.budejie.com/api/api_open.php?a=category&c=subscribe',
      success: function (res) {
        console.log(res.data.list);
        that.setData({
          leftList: res.data.list,
          currentId: res.data.list[0].id
        });
        that.getRightData()
      }
    })
  },
  getRightData:function(){
    var that=this;
    wx.request({
      url: 'https://api.budejie.com/api/api_open.php?a=list&c=subscribe&category_id='+that.data.currentId,
      success:function(res){
        console.log(res.data.list);
        that.setData({
          rightList: res.data.list
        })
      }
      
    })
  },
  leftTabTap:function(e){
    console.log(e.target.dataset.id);
    this.setData({
      currentId: e.target.dataset.id,
    })
    this.getRightData();
  }
 
})