(this.webpackJsonpmotorcycle_app=this.webpackJsonpmotorcycle_app||[]).push([[0],{12:function(e,t,o){e.exports={body:"home_body__Fyw2F",container2:"home_container2__2VrbL",border:"home_border__1zGCn"}},13:function(e,t,o){e.exports={sidebar_item:"sidebarItem_sidebar_item__3VH6B",Link:"sidebarItem_Link__6iYwh",icon:"sidebarItem_icon__2q32T",name:"sidebarItem_name__2Zan1"}},26:function(e,t,o){},27:function(e,t,o){},34:function(e,t,o){"use strict";o.r(t);var r=o(1),n=o.n(r),c=o(19),i=o.n(c),a=o(10),s=(o(26),o(27),o(14)),A=o(2),l=o(12),d=o.n(l),b=o(13),m=o.n(b),j=o(0);var h=function(e){var t=e.theActiveItem===e.path;return Object(j.jsx)("li",{className:m.a.sidebar_item,onClick:function(t){e.setActive(e.path),t.currentTarget.scrollIntoView({block:"start",inline:"center",behavior:"smooth"})},children:Object(j.jsxs)(a.b,{className:m.a.Link,to:e.path,children:[Object(j.jsx)("div",{className:m.a.icon,style:{marginRight:"10px",backgroundColor:t?"var(--active-color)":"var(--font-color)",WebkitMask:"url(".concat(e.icon,") no-repeat center")}}),Object(j.jsx)("span",{className:m.a.name,style:{verticalAlign:"middle",color:t?"var(--active-color)":"var(--font-color)"},children:e.name}),Object(j.jsx)("span",{style:{marginLeft:"10px",color:"red",fontWeight:"bolder"},children:e.unSeenMSGs})]})})},g=o(8),x=o.n(g);var p=function(e){var t=e.setColor,o=e.lang,n=Object(r.useState)(window.location.pathname),c=Object(s.a)(n,2),i=c[0],a=c[1];return Object(j.jsx)("div",{className:x.a.mainContainer,children:Object(j.jsxs)("label",{className:x.a.container,htmlFor:"setNavColor",children:[Object(j.jsx)("input",{name:"--nav-color",onChange:t,style:{display:"none"},type:"color",id:"setNavColor"}),Object(j.jsxs)("h2",{className:x.a.logo,children:[Object(j.jsx)("label",{htmlFor:"setActiveColor",className:x.a.icon,style:{WebkitMask:"url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD/klEQVRoge2YWaiNURTHf+bhIqHM4YEOIkOGcl1jN3MZS8mTBw9KxItQyviga0oyPVxK3AiZEq7wQKYSmUPh0OEa7uEa7/Gw1ud8d9/9nfN95x5O9P1rd76z9vrvtdbea6+9vw9ChAgRIkSIfwd9gSLgFvAVuADUyalHAdEcKAESljYth34Fxk3E6TiwARgDrFLZ4Rz6FRhXkHSKuGRdkEC+AHm5cCpbmEgyvSaobBHwGvgOPAV2A21z4p1P9AQekgxkk8pnUX0PncqFgzYMQvbFZeAVUEF1Z++rbmug0uj7ENRgPWAysB3ZnFGX0e9AGZLne4A+PsZrCRy1OO3VuijvhiH/GSSI0cCTAEY/pwmmEclK5bfNVe4KQ+57RcYC3wIaTQAPgM4eYy7JYLzzyu1jyE/6DeRRBkadVgHsB+Ygp3YbpJS+ymCsSqCb+vSADKrWnRoEku22xq/TNjQBliE5XQ68B4qBKUAPZIabAd2B6cBeJG//RCCvkf3119AKufxlsrds7TRwSZ/nZdPRQmAncA+5H8X1eTswwqU3DIjVMIgSoC5SdBLAM6BAbd1GVj+OnDW7gHFArXQBREjOTKpWCnRSTjfgbYZBPAEa6zi1gGMa0MY0vCtAL68gRiD7w68TZcBA5Y4EfmQQyCyX/eHAAX1uAbxJwy1HVqcKIgGDcFqM5FmyIyC3DKiv3F7AJ5UPUdk8H2PEMQ7mixalEmAoUrXykBU7b9FzLnXtkSu530COKK82cg9z5FdVNhU5n5qr/QLgoGWca+ieKbR0zscbqy36g7TveIBA1ilnjKVvq/6e06DcWGjRnwRSncyVAGiIlNgokq8bgQYa/WmDs0U5cwMEslg5xYb8AHK2Pdb/CyyTecjgFIOUVbdwqCoXWYxv1r7xhvy6yocFCGSpcu4a8nyVFyA33wpgsBGIaechwEdD2ESVoymcKLfMEkDXAIEUKafckLtfe1eqLAp0cMmbGpy4mX9uJFL0eeFHAN2Y/prvG+7DbjmSRm1Ilmar3drAS0PYT3/3WQib1dBM7KnVwcKx4QzJffXCwz7IjXg2cBZ455L3NzjPofpmP6idDYH1SKAx5HW1vgZyxuA4TvVAikKp8py0eYuUyW3AKKrO+hYP+6lw2GbfVn4XphhkrUV/YAr9dMgPaH+xRd8pENYD8RBybchDCsAo5BOnqZeNrxwn0tjP02dzJRLK/Y0IkoN+K47TYiQvjzVBR1JXSa9mVjMgs0vjgCwE4aAfsvH92n9B1cJQBRHsaWa2c2RnJUy0Q24W5rctd6tUnXZuotcLSiHyWpuPLDtIibuAlOXSrLpfHb2BGWrf+fgQRSa5BPm+FiJEiBAhQoT4b/ELr03SwEX0adsAAAAASUVORK5CYII=",") no-repeat center")},children:Object(j.jsx)("input",{name:"--active-color",onChange:t,style:{display:"none"},type:"color",id:"setActiveColor"})}),Object(j.jsx)("label",{htmlFor:"setFontColor",children:"my Motor Cycle"}),Object(j.jsx)("input",{name:"--font-color",onChange:t,style:{display:"none"},type:"color",id:"setFontColor"})]}),Object(j.jsxs)("ul",{className:x.a.sidebar_list,children:[Object(j.jsx)(h,{name:o.Home,path:"/",setActive:a,theActiveItem:i,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIDSURBVFiF7de7axRRFAbwX+KaoMSkiEhUAgqKELGIIGglQrASRNEIvsDaIhBECKbQP0FQey3ttJBgodioRdBCBK1SKERQ4gtR45pY3LPsOmw2u5Ndg5APLsOc13fmzp1zzvCfY2OsZcFxfMJXnPmXxF24iXm8iTUfsq5Wk+/G6yC8g1704HbIprC3FcRtGMGPWCMhq8RZfMMsLqO9WeTrcVd6wlcYrGG7Ey/C9j76lkq+H28j4C31veM1uBo+73AwD/EqaRuL+ILTOWIcw0fMRUKr63XsxyPpCSaxPQd5CVvwOGI9xdbFHA7jg3LWHUsgL6Eg7eZvqW4MVzPqDMI5vMehJhBnMYRp5fO0tqTYgeeheIjNLSAvYQMmgusldpGKxy+Ma+K3WwPtuBScU3AEe0LZi5MtIm7DqeAQnCeyRqPS9gy0IIGBiD1aKcxueWfm2kxUjV3IGawH53Eg7h/gulS0GkKeBDZJhWobvodsCOek0j3dSLA8p/5GkF9Ad6yLUsW8liPeXxiTDspCHa9b6g/3qugmpE9r3QK+gxF7rFLY6A70SY3qWRXdpPRKG5oRG02gZF+soitmbFqSQNOxksBKAgtVwqPKHbIS9Uy5w9IwmkV/PQnMxHV8EZLPNWRXFvGdqbzJ/lwUsE/tbjgrDZizGXmH9FdUa478iSeq15HlwR/mFmUPhTokMQAAAABJRU5ErkJggg=="}),Object(j.jsx)(h,{name:o.Myinterests,path:"/MyInterests",setActive:a,theActiveItem:i,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMOSURBVFiFvdbfi1VVFAfwz8yYhYxWlNWMM2qJbxEaFJFJvx56EAk09SkfevAtQrB6ihT6A5IISSiIEcGYHnqWfmsQSDMZUhkKM2lqWXdGksGimR72Ot5zT+fcH95LX9iw91pr77X23usXN4bbsQcnY+wJWsfo71D+ARzEKYxiW4zRoB0MmZ6iH5txFD/iVdxWIjeIXdKLnMBO3NSN4rtC2dlQvhl9be59DB9gGnuxvBPFD+IdXMB+3NvJ5gKGw4DzYdCjVYKLpb88iu/xEpZ0obiIm6UvmZC+ZxduyZgv42ccwcYeKq3CxtA1LUWPK9JT5fE5/siNK9iX47+PmRx/JmgZ9sWe/BmfFXQMh4xaiZWXMZBbP43x3PoE1uTWa4KWYTz2ZBiIM4uoLSohwhwOYCHWKwqGzuGN7AZYFrQ8fze2x7qvwL+OPvwS4zyeDfo6rC3IHg85wVtX4E/ip5gPY0OBfxrfxvyjuNQQ3Ir7pH/8vzATOpctwmyMhZzABFb1WOkU1sd8QUpwqnxgVMpe//RI+QAulTGqDKDRCavwNq5K8dyssFWm8GYGfIz5FgZcwjV80kKuH1tayDSEWTEPdItiHjiZTTrtB3qF6z1Dsy8owx1SqV1cwb+GY1LqbYa38CKNzlFTb6su426NUTAoJZIJ/N7EwPXSDa/m6FkU3Fmiq8GADGU+8IoUGa1wIGTzKPpAWf0pNWAEP0iJ6i+sbMOAVSE7K/UWK5oZ0MoHNkmleRIPSzW8FaZwGF9L37EJ71YJt/KBESkfDOHPGO1gMMYFPCUVulIfaPUCU3gdz+GF2DSrOkH1S8WthvekvmBamzmlygnHpY54L37FN1iNi+rdzsWgTYTMa7Ena2Ju2AdIDWUNO/AEDkkv8ZB63/+3VLzm8aTUAX8ae5uik0S0H1/hS+k2H6pn0nlslf78mP+GYdcGLJU62SM52jMlcs/n5o/0yoDJUPybdOMR1eG4EuekF1mON9sxIkOVE27BWMyHcKbJGWdxT8zH1EtwpRPm88AXuL8Ti7vAd3gc/gXfC8KPi1hargAAAABJRU5ErkJggg=="}),Object(j.jsx)(h,{name:o.AddMotor,path:"/AddMotor",setActive:a,theActiveItem:i,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAuwAAALsBnVmCYQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANYSURBVFiF7ddLqFZVFAfw37pqlGFeDcqU3g8bZFiBUqAG9qIsrcAGQQVh4SAHgQ4yg6xBhDnJQoIoepDko5Ro4kB70aWCyG55pSh7WWRaFqWRuBrs88nh6350vk9p1ILN2Wedvdf+r8deax14C1kbBzErM+FcPI5f29a0xl5swjmZqZfRVx0yDeOqsRF3RsRr+ACBy2rf6+Nq7MF7ETFDj/QDzm8hwhoMYBFOaKIFbsbPmNmtBUZ2ALU6M5+tMyJiNsbUWKMxAxdjCM9jY0TMy8w3mmrfCcBwdDtOG4Y/GSdjPLbj1Yi4KTO3NBU8nAvuaGpCnKcE6WzFDQ9Vz8lNg3A4Gt8JbURMjIgzWgNzMAqr8b5i1XW4p4n2nVywIiJGZ+bDbYfPryy0H38pV3E7ZuIGLMWxOIB3mwJI3BsReyvehViOuyPiIF7H74qJH8FHGMjMhRFxES7H/sxcFhHTMQVbsbIJgMA8TK3xDirJ51QswSyMVXLCA9iJbdhd7d+K6xW/n4SpmbmryeHQNNCi7X1TBfRlJZNOxqNY00smbAIy21iH8CA+V0w+EV801rpGjQB0oG8y8z5M6ObOt1M3iahOX2JOROyEiIBr8UnXknqpYJiEF5Q4GFBu0jOKNbqSFf90bzOKiAkYysz+iEiMy8xfupVzJDFwVOh/AEcKYEREDFei/xMAu7EFX2E99vUipOdbcFhAxNjM3NfGG6cUtSkYgbWt+hARfZl5qGsAEXEBzsbXmflhjd+P66rDWoeeoqTpj5XyfIVSM15RKu2neA7rGgGIiHl4Gu9gOn6sBAxiFXZUhw1Wz6HMPFDbfyLmY7GSLddjAfqbZr4Xsbyaj1TS7hr8iQUd9hyH/jbeIOZW88XY0BTAokrrS9r4T1WWmYK5WKaU6CElTS+trZ2KnzCqet+GG7vJ/0uUyB+s5pOUn5OXKhe8iSexUGnX27VfgVU1MHtwTLdFaJTS+63FH9iM23D8v+zrw3eYXr0/hicys7dqWAnpx114G78pPyZXoq+2ZgxuVVr1HRVvBL4/DKZXAG1gzlL6xc8qTVdig9LMbq1cd3+19poWmCMqx50oIi7FLUrTsjYzd0XEZpypXN1pSlddWv6jYYEGFurDVZWbvsXprW9/A7+yx8qffv/UAAAAAElFTkSuQmCC"})]})]})})},y=o(9),O=o.n(y),u=[{owner:"Mahmoud Bakr",model:"jsx1",photo:"/harley.jpg",price:"343900 $"},{owner:"Mostafa Mohamed",model:"jsx1",photo:"/bmw.jpg",price:"43200 $"}];function C(e){var t=e.setColor;return Object(j.jsxs)("div",{className:O.a.container,children:[Object(j.jsxs)("article",{className:O.a.motorContainer,children:[Object(j.jsxs)("label",{className:O.a.border,htmlFor:"setArticleColor",children:[Object(j.jsx)("input",{name:"--article-color",onChange:t,style:{display:"none"},type:"color",id:"setArticleColor"}),Object(j.jsx)("header",{children:Object(j.jsx)("span",{children:u[0].owner})})]}),Object(j.jsx)("main",{children:Object(j.jsx)("img",{src:u[0].photo,alt:""})}),Object(j.jsxs)("footer",{children:[Object(j.jsxs)("h2",{children:["price: ",u[0].price]}),Object(j.jsxs)("h2",{children:["model: ",u[0].model]})]})]}),Object(j.jsxs)("article",{className:O.a.motorContainer,children:[Object(j.jsxs)("label",{className:O.a.border,htmlFor:"setArticleColor",children:[Object(j.jsx)("input",{name:"--article-color",onChange:t,style:{display:"none"},type:"color",id:"setArticleColor"}),Object(j.jsx)("header",{children:Object(j.jsx)("span",{children:u[1].owner})})]}),Object(j.jsx)("main",{children:Object(j.jsx)("img",{src:u[1].photo,alt:""})}),Object(j.jsxs)("footer",{children:[Object(j.jsxs)("h2",{children:["price: ",u[1].price]}),Object(j.jsxs)("h2",{children:["model: ",u[1].model]})]})]})]})}var v={Home:"\u0627\u0644\u0631\u0626\u064a\u0633\u0647",Myinterests:"\u0627\u0647\u062a\u0645\u0627\u0645\u0627\u062a\u064a",AddMotor:"\u0627\u0639\u0631\u0636 \u062f\u0631\u0627\u062c\u062a\u0643"},B={Home:"Home",Myinterests:"My interests",AddMotor:"Sell your motor"};var F=function(){var e=Object(r.useState)(B),t=Object(s.a)(e,2),o=t[0],n=t[1],c=function(e){var t=e.target.value,o=parseInt(t.substr(1,2),16),r=parseInt(t.substr(3,2),16),n=parseInt(t.substr(5,2),16);document.querySelector(":root").style.setProperty(e.target.name,"rgba(".concat(o,",").concat(r,",").concat(n,",.9)"))};return Object(j.jsx)(r.Fragment,{children:Object(j.jsx)(A.c,{children:Object(j.jsx)("div",{className:d.a.container,children:Object(j.jsxs)("div",{className:d.a.body,children:[Object(j.jsx)(p,{lang:o,setColor:c}),Object(j.jsx)("div",{children:Object(j.jsx)("label",{className:d.a.border,htmlFor:"setBorderColor",children:Object(j.jsx)("input",{name:"--border-color",onChange:c,style:{display:"none"},type:"color",id:"setBorderColor"})})}),Object(j.jsxs)("label",{className:d.a.container2,htmlFor:"setBodyColor",children:[Object(j.jsx)("input",{name:"--body-color",onChange:c,style:{display:"none"},type:"color",id:"setBodyColor"}),Object(j.jsx)(A.a,{exact:!0,path:"/",children:Object(j.jsx)(C,{setColor:c})})]}),Object(j.jsxs)("footer",{style:{backgroundColor:"var(--nav-color)",display:"flex",justifyContent:"space-around"},children:[Object(j.jsx)("h1",{style:{cursor:"pointer"},onClick:function(){n(v)},children:"Arabic"}),Object(j.jsx)("h1",{style:{cursor:"pointer"},onClick:function(){n(B)},children:"English"})]})]})})})})};var S=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(F,{})})},I=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,35)).then((function(t){var o=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;o(e),r(e),n(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(a.a,{children:Object(j.jsx)(S,{})})}),document.getElementById("root")),I()},8:function(e,t,o){e.exports={mainContainer:"sidebar_mainContainer__2lusf",container:"sidebar_container__3-tiV",sidebar_list:"sidebar_sidebar_list__3Qdil",logOut:"sidebar_logOut__2SaxP",name:"sidebar_name__2liIt",info:"sidebar_info__PhGC3",image:"sidebar_image__1HsDD",icon:"sidebar_icon__2rhVv",logo:"sidebar_logo__1cSt4"}},9:function(e,t,o){e.exports={container:"main_container__2FKK7",motorContainer:"main_motorContainer__2DLhK"}}},[[34,1,2]]]);
//# sourceMappingURL=main.bdf2cb63.chunk.js.map