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
  gotobook:function(){
    wx.navigateTo({
      url: '/pages/store/order/detail/detail',
      success:function(res){
        console.log("success!");
      },
      fail:function(res){
        console.log("failed!");
      }
    })
  }
})