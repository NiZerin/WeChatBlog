/*
 * 
 * WordPres版微信小程序
 * author: NiZerin
 * organization: 泽林博客 www.iacblog.com
 * github:    https://github.com/CrazyNing98/WeChatMiniProgram-Blog
 * 技术支持微信号：NINGCZ19980501
 * 开源协议：MIT
 * Copyright (c) 2017 https://www.iacblog.com/ All rights reserved.
 * 
 */

var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
