Page({
  data: {
  },
  onLoad: function (options) {
    console.log("onLoad")
  },
  onReady: function () {
    console.log("onReady")
  },
  onShow: function () {
    console.log("onShow")
  },
  onHide: function () {
    console.log("onHide")
  },
  onUnload: function () {
    console.log("onUnload")
  },
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },
  onReachBottom: function () {
    console.log("onReachBottom")
  },
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  },
  gotoprofile:function(){
    wx.navigateTo({
      url: '/pages/store/account/profile/profile',
    })
  },
  gotopayout:function(res){
    wx.navigateTo({
      url: '/pages/store/history/payout/payout',
    })
  },
  gotopayin: function (res) {
    wx.navigateTo({
      url: '/pages/store/history/payin/payin',
    })
  },
  gotoincome: function (res) {
    wx.navigateTo({
      url: '/pages/store/account/income/income',
    })
  }
})