(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[408],{51975:function(e,t,r){"use strict";r.d(t,{Z:function(){return N}});var n=r(68216),s=r(25997),c=r(14695),i=r(13444),a=r(30268),o=r(92953),p=r(92809),u=r(67294),l=r(41659),f=r(94184),d=r.n(f),h=r(34390),m=r(6714),v=r(10039),g=r(61145);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=r(99446),b=r(40799),O=r(85893);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,o.Z)(e);if(t){var s=(0,o.Z)(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return(0,a.Z)(this,r)}}var _={step01:r(14054),step02:r(29266),step03:r(98792),specialPrize:r(83603),phoneCard:r(33876),voucher:r(14596)},C=function(e){(0,i.Z)(r,e);var t=Z(r);function r(e){var s;(0,n.Z)(this,r),s=t.call(this,e),(0,p.Z)((0,c.Z)(s),"_renderStep",(function(){var e=s.props,t=e.classes,r=e.isReceivePrize;return(0,O.jsx)("div",{className:t.stepWrapper,children:s.datas.map((function(e){var n=e||{},s=n.id,c=n.title,i=n.name,a=n.descList,o=n.description,u=n.icon,l=n.note,f=n.description2,h=n.hightlight,v=n.description3,g=n.scale;return(0,O.jsxs)("div",{className:t.stepItem,children:[(0,O.jsx)("div",w(w({className:d()(t.stepIcon,(0,p.Z)({},"isReceivePrize",r))},(0,m.hj)(g)&&{style:{transform:"scale(".concat(g,")")}}),{},{children:(0,O.jsx)(y.OO,{src:_[u],height:"100%",width:"100%"})})),(0,O.jsxs)("div",{className:t.stepContent,children:[(0,O.jsxs)("span",{children:[(0,O.jsx)(y.Nv,{type:"span",size:"medium",color:"error",text:"".concat(c," ")}),(0,O.jsx)(y.Nv,{type:"span",size:"medium",text:i})]}),!!o&&(0,O.jsx)(y.Nv,{type:"span",text:o}),!!f&&(0,O.jsxs)("div",{className:t.stepMoreDesc,children:[(0,O.jsxs)("span",{children:[f," "]}),(0,O.jsxs)("span",{children:[h," "]}),(0,O.jsx)("span",{children:v})]}),(0,O.jsxs)("div",{className:t.stepDescList,children:[(0,m.kJ)(a,!0)&&a.map((function(e){var r=e||{},n=r.id,s=r.name,c=r.description;return(0,O.jsxs)("div",{className:t.stepDescItem,children:[(0,O.jsx)(y.Nv,{type:"span",size:"textBold",color:"error",text:s}),(0,O.jsx)(y.Nv,{type:"span",text:c})]},n)})),!!l&&(0,O.jsx)(y.Nv,{type:"span",size:"textBold",color:"error",text:l})]})]})]},s)}))})}));var i=e.datas;return s.datas=i||b.w3,s}return(0,s.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.i18n,r=e.classes,n=e.title;return(0,O.jsxs)("div",{className:r.wrapper,children:[(0,O.jsx)("div",{className:r.header,children:(0,O.jsx)(y.HU,{label:t.t(n||"participateIn")})}),this._renderStep()]})}}]),r}(u.Component),N=(0,l.qCK)((0,h.Z)(),(0,v.Z)((function(e){var t,r,n=e.palette,s=e.breakpoints;return j(j({},(0,g.RU)({breakpoints:s})),{},{stepWrapper:j(j(j({gap:32,position:g.m7.relative},g.Gq.flexColumn),g.Gq.textBiggerPrimary),{},(t={},(0,p.Z)(t,s.up("md"),{gap:40,flexDirection:"row",justifyContent:"center",alignItems:"flex-start",flexWrap:"wrap"}),(0,p.Z)(t,s.up("lg"),{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}),t)),header:(0,p.Z)({marginBottom:36},s.up("lg"),{marginBottom:56}),stepIcon:{borderRadius:12,"&.isReceivePrize":j({minHeight:220,maxHeight:220,maxWidth:368},g.Gq.flexCenter)},stepItem:j(j({gap:30,width:"100%"},g.Gq.flexColCenter),{},(r={},(0,p.Z)(r,s.up("md"),{minWidth:"calc(50% - 25px)",maxWidth:"calc(50% - 25px)"}),(0,p.Z)(r,s.up("lg"),{minWidth:"100%",maxWidth:"100%"}),r)),stepContent:j(j({gap:10},g.Gq.flexColumn),{},{"&>span":{textAlign:"center"}}),stepDescList:j({gap:24},g.Gq.flexColumn),stepDescItem:j({},g.Gq.flexColumn),stepMoreDesc:{textAlign:"center",fontWeight:g.vC.bold,"& >span:nth-child(2)":{color:n.error.main}}})})))(C)},95004:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return P}});var n=r(68216),s=r(25997),c=r(13444),i=r(30268),a=r(92953),o=r(67294),p=r(41659),u=r(94184),l=r.n(u),f=r(34390),d=r(10039),h=r(92809),m=r(61145);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,h.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=r(51975),j=r(40799),y=r(85893);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,a.Z)(e);if(t){var s=(0,a.Z)(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var O=function(e){(0,c.Z)(r,e);var t=b(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,s.Z)(r,[{key:"render",value:function(){var e=this.props.classes;return(0,y.jsx)("div",{className:e.wrapper,children:(0,y.jsxs)("div",{className:l()(e.cLayout,e.content),children:[(0,y.jsx)(x.Z,{}),(0,y.jsx)(x.Z,{isReceivePrize:!0,datas:j.yI,title:"prizeClaimProcess"})]})})}}]),r}(o.Component),P=(0,p.qCK)((0,f.Z)(),(0,d.Z)((function(e){e.palette;var t=e.breakpoints;return g(g({},(0,m.RU)({breakpoints:t})),{},{wrapper:g(g({gap:8,margin:"72px 0"},m.Gq.flexColumn),{},(0,h.Z)({},t.down("lg"),{margin:"40px 0"})),content:g({gap:64},m.Gq.flexColumn)})})))(O)},85736:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cach-thuc-tham-gia",function(){return r(95004)}])},14054:function(e,t,r){"use strict";r.r(t),t.default="/_next/static/chunks/media/images/step_01.56e0552a35f7d6d10ab1.svg"},29266:function(e,t,r){"use strict";r.r(t),t.default="/_next/static/chunks/media/images/step_02.c200d06589ff08ea9604.svg"},98792:function(e,t,r){"use strict";r.r(t),t.default="/_next/static/chunks/media/images/step_03.e8e38f79488e501c1279.svg"},83603:function(e,t,r){"use strict";r.r(t),t.default="/_next/static/chunks/media/images/bg_prize_01.0cd1380f9ee183b56dd0.jpeg"},33876:function(e,t,r){"use strict";r.r(t),t.default="/_next/static/chunks/media/images/bg_prize_card.74a495b415855833723f.png"},14596:function(e,t,r){"use strict";r.r(t),t.default="/_next/static/chunks/media/images/bg_prize_voucher.dba345ac021ce3362a77.png"}},function(e){e.O(0,[799,774,888,179],(function(){return t=85736,e(e.s=t);var t}));var t=e.O();_N_E=t}]);