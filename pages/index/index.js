//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:'',  //时间数据
    mHt:[],   //头部文字
    mLj:[],   //快速了解li
    mLjT:[],  //快速了解text
    mZp:[],   //我的作品li
    mYs:[],   //我的优势li
    mXy:[],   //自我修养li
    mXyO:[],  //自我修养 开源
    mTd:[],   //希望的团队
    mHf:[],   //底部文字
    f:[]      //脚部信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //这个onLoad注意大小写区分，刚开始用小写总报错
      var that = this;
      wx.request({
        async:true,
        url: 'https://wx.iacblog.com/wx/api/resume',//这个地址好像只能https的
        method: "GET",
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          console.log(res.data);
          var time = res.data.time;
          var mLj = res.data.mLj;
          var mHt = res.data.mHt;
          var mLjT = res.data.mLjT;
          var mZp = res.data.mZp;
          var mYs = res.data.mYs;
          var mXy = res.data.mXy;
          var mXyO = res.data.mXyO;
          var mTd = res.data.mTd;
          var mHf = res.data.mHf;
          var f =res.data.f
          that.setData({
            time:time,
            mLj:mLj,
            mHt:mHt,
            mLjT: mLjT,
            mZp:mZp,
            mYs:mYs,
            mXy:mXy,
            mXyO:mXyO,
            mTd: mTd,
            mHf: mHf,
            f:f
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
