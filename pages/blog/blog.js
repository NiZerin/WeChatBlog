var WxParse = require('../../tools/wxParse/wxParse.js');
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://www.iacblog.com/wp-content/uploads/2018/11/0eb5d24ce7f14df.jpg',
      'https://www.iacblog.com/wp-content/uploads/2018/12/e400934a67e0904.jpg',
      'https://www.iacblog.com/wp-content/uploads/2018/12/05d305516f3b4ac.jpg'
    ],
    indicatorDots: false,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    circular:true,
    posts:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://wx.iacblog.com/wx/api/blogData',
      success: (res) => {
        console.log(res.data);
        let posts = res.data;
        for(let i =0 ; i < posts.length; i++){
          var rendered = posts[i].excerpt.rendered;
          let res = WxParse.wxParse('rendered'+i, 'html', rendered, this);
          posts[i].excerpt.rendered = res;
        }
        this.setData({
          posts:posts
        })
      }
    });

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