// pages/main/main.js
const api = require('../../config/api.js')
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    hidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // requestData(that, mCurrentPage + 1)
    api.getData(api.GET_URL)
      .then((data) => {
        this.setData({
          items: data.results,
          hidden: true
        })
      }, (errmsg) => {
        this.setData({
          hidden: false
        })
      });
  },

  onItemClick: function(event) {
    var targetUrl = api.PAGE_SPECIFIC
    if (event.currentTarget.dataset.publishTime != null) {
      targetUrl = targetUrl + "?publishTime=" + event.currentTarget.dataset.publishTime;
      console.log('onItemClick url = ' + targetUrl);
    }
    wx.navigateTo({
      url: targetUrl
    });
  },

  onPostClick: function(event) {
    console.log('onPostClick')
    wx.navigateTo({
      url: api.PAGE_POST,
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