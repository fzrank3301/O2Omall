Page({
	data:{
    message:[
      {
        pic: "/res/manager/tabs/bg1.jpg",
        desc:"openstack课程",
        price:"120"
      },
      {
        pic: "/res/manager/tabs/bg2.jpg",
        desc: "云计算课程",
        price: "120"
      }, 
    ]
	},
  onLoad: function (options) {
    console.log("onLoad");
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
  godetails:function(){
   wx.navigateTo({
     url: '/pages/store/products/detail/detail',
     success:function(res){
       console.log("success");
     },
     fail:function(res){
       console.log("fail!");
     }
   }) 
  }, 
  gotoprofile: function () {
    wx.navigateTo({
      url: '/pages/store/account/profile/profile',
    })
  },
  gotopayout: function (res) {
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
});