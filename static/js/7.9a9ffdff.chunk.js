(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[7],{186:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(0),o=n.n(r),i=n(177),c=n(141),l=n(169),u=n(170),s=n(171),d=n(172),m=n(10),p=n(181),f=n(165),k=Object(f.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)},"& > p":{fontFamily:"BlinkMacSystemFont",fontSize:"24px",padding:e.spacing(1),backgroundColor:"#888888",color:"white",borderRadius:3}}}}));t.default=function(e){var t=k(),n=o.a.useContext(m.b).user,r=o.a.useContext(m.a).active,f=o.a.useState("Day"),v=Object(a.a)(f,2),h=v[0],w=v[1],g=null;null!==r&&(g=[{Id:1,Subject:n+":active time",StartTime:new Date(r.start_time),EndTime:new Date(r.end_time)}]);return o.a.createElement("div",{style:{marginTop:"10px"}},o.a.createElement("div",{className:t.root},null!==n?o.a.createElement("p",null,n):null,o.a.createElement(p.a,{variant:"outlined",onClick:function(){return e.history.goBack()}},"Back"),o.a.createElement(p.a,{variant:"outlined",color:"secondary",onClick:function(){return w("Day")}},"Day"),o.a.createElement(p.a,{variant:"outlined",color:"secondary",onClick:function(){return w("Week")}},"Week"),o.a.createElement(p.a,{variant:"outlined",color:"secondary",onClick:function(){return w("Month")}},"Month")),o.a.createElement(i.a,{height:window.innerHeight-132,selectedDate:null!==r?new Date(r.start_time):new Date,eventSettings:{dataSource:g},popupOpen:function(e){e.cancel=!0},currentView:h,showHeaderBar:!1},o.a.createElement(c.b,{services:[l.a,u.a,s.a,d.a]})),";")}}}]);
//# sourceMappingURL=7.9a9ffdff.chunk.js.map