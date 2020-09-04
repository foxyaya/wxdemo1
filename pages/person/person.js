// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
    person:{
      "id": 0,
      "name": "骚钟"
    },
    list:[
    {
      "id":0,
      "name":"骚钟"
    },
    {
      "id":11,
      "name":"骚🐻"
    },
    {
      "id":12,
      "name":"骚毛"
    }]
  },

  handleMake(e){
    this.setData({
      num: e.detail.value,
    })

  },

  handleMakeUpOrDown(e){
    // console.log(e);
    const operator = e.currentTarget.dataset.operator;
    this.setData({
      num: this.data.num + operator
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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