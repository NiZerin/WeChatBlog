//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    name:'Zerin',
  },
  changeName:function(){
    this.setData({
      name:'Ning'
    })
  }
})
