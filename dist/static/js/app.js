global.webpackJsonp([3],{"1irQ":function(t,n){},"8O8Z":function(t,n){},IcnI:function(t,n,e){"use strict";var o=e("5nAL"),a=e.n(o),c=e("NYxO"),i=e("lwq5"),s=e("ukYY"),r=e("424j");a.a.use(c.a),n.a=new c.a.Store({state:i.a,mutations:s.a,plugins:[Object(r.a)({storage:{getItem:function(t){return wx.getStorageSync(t)},setItem:function(t,n){return wx.setStorageSync(t,n)},removeItem:function(t){}}})]})},M93x:function(t,n,e){"use strict";var o=e("Mw+1");var a=function(t){e("1irQ")},c=e("ybqe")(o.a,null,a,null,null);n.a=c.exports},"Mw+1":function(t,n,e){"use strict";n.a={created:function(){var t=wx.getStorageSync("logs")||[];t.unshift(Date.now()),wx.setStorageSync("logs",t),console.log("app created and cache logs by setStorageSync"),wx.cloud?wx.cloud.init({traceUser:!0}):console.error("请使用 2.2.3 或以上的基础库以使用云能力")}}},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("5nAL"),a=e.n(o),c=e("M93x"),i=e("IcnI"),s=e("ympj"),r=(e.n(s),e("8O8Z"));e.n(r);a.a.prototype.$store=i.a,a.a.config.productionTip=!1,c.a.mpType="app",new a.a(c.a).$mount(),n.default={config:{pages:["^pages/home/main","pages/details/main","pages/market/main","pages/news/main"],window:{navigationBarBackgroundColor:"#F73240",navigationBarTextStyle:"white",navigationBarTitleText:"",backgroundColor:"#F7F8F9",backgroundTextStyle:"dark",enablePullDownRefresh:!1},cloud:!0,tabBar:{color:"#666666",selectedColor:"#D62B2B",borderStyle:"white",backgroundColor:"#fff",list:[{text:"直播",pagePath:"pages/home/main",iconPath:"static/icon/home.png",selectedIconPath:"static/icon/home_focus.png"},{text:"行情",pagePath:"pages/market/main",iconPath:"static/icon/invest.png",selectedIconPath:"static/icon/invest_focus.png"},{text:"我的",pagePath:"pages/my/main",iconPath:"static/icon/my.png",selectedIconPath:"static/icon/my_focus.png"}]}}}},lwq5:function(t,n,e){"use strict";n.a={openId:"",code:"",userInfo:{},loginMsg:{}}},ukYY:function(t,n,e){"use strict";var o,a=e("bOdI"),c=e.n(a),i=e("Du/2"),s=(o={},c()(o,i.c,function(t,n){t.openId=n}),c()(o,i.a,function(t,n){t.code=n}),c()(o,i.d,function(t,n){t.userInfo=n}),c()(o,i.b,function(t,n){t.loginMsg=n}),c()(o,"showToast",function(t,n){wx.showToast({title:n.text,icon:n.icon,duration:1e3})}),o);n.a=s},ympj:function(t,n){}},["NHnr"]);