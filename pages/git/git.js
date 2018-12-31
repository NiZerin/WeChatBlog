//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:'',    //时间数据
    mHt:[],     //头部文字
    f:[],       //脚部信息
    mHf:[],     //底部文字
    line:[]     //履历信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      async: true,
      url: 'https://wx.iacblog.com/wx/api/record',
      method: "GET",
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        var time =res.data.time;
        var mHt = res.data.mHt;
        var f = res.data.f;
        var mHf = res.data.mHf;
        var line= res.data.line;
        that.setData({
          time: time,
          mHt: mHt,
          f: f,
          mHf: mHf,
          line:line
        })
      },
      fail: function () {
        console.log("接口调用失败");
      }
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
