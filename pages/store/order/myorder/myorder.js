Page({
   data: {
     message:[
       {
         pic: "/res/manager/tabs/bg1.jpg",
         desc: "openstack课程",
         price: "120"
       },
       {
         pic: "/res/manager/tabs/bg2.jpg",
         desc: "大数据课程",
         price: "120"
       },
       {
         pic: "/res/manager/tabs/bg1.jpg",
         desc: "大数据课程",
         price: "120"
       },
       {
         pic: "/res/manager/tabs/bg2.jpg",
         desc: "大数据课程",
         price: "120"
       },
       {
         pic: "/res/manager/tabs/bg1.jpg",
         desc: "大数据课程",
         price: "120"
       },
       {
         pic: "/res/manager/tabs/bg2.jpg",
         desc: "大数据课程",
         price: "120"
       },
     ]

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
  }
})