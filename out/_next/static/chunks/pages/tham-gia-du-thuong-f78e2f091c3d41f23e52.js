(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{58255:function(e,n,r){"use strict";var t=r(92809),a=r(67294),i=r(56760),o=r(82530),c=r(85893);function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}n.Z=function(){return function(e){var n=(0,o.Z)(e),r=(0,a.forwardRef)((function(n,r){var t=(0,i.Z)().breakpoints.values||{},o=(0,a.useState)(),s=o[0],u=o[1];return(0,a.useEffect)((function(){var e=function(e){return t[e]||0};u({up:function(n){return window.innerWidth>=e(n)},down:function(n){return window.innerWidth<e(n)},between:function(n,r){return e(n)<=window.innerWidth&&window.innerWidth<e(r)}})}),[]),s?(0,c.jsx)(e,l({},l(l({},n),{},{ref:r,breakpoints:s}))):null}));return r.displayName="withBreakPoints(".concat(n,")"),r}}},43771:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return q}});var t=r(30266),a=r(68216),i=r(25997),o=r(14695),c=r(13444),s=r(30268),l=r(92953),u=r(92809),d=r(809),p=r.n(d),f=r(67294),m=r(41659),h=r(34390),g=r(58255),b=r(71170),x=r(97266),v=r(6714),j=(r(92922),r(10039)),w=r(61145);function k(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function y(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?k(Object(r),!0).forEach((function(n){(0,u.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var C=r(99446),N=r(85228),O=r(45793),Z=r(94184),_=r.n(Z),T=r(85893);function P(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function R(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?P(Object(r),!0).forEach((function(n){(0,u.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function D(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,t=(0,l.Z)(e);if(n){var a=(0,l.Z)(this).constructor;r=Reflect.construct(t,arguments,a)}else r=t.apply(this,arguments);return(0,s.Z)(this,r)}}var S={checked:r(60714)},E={background:r(17762),backdrop:r(9422),smallPath:r(61194).Z},I={roll:r(11098).Z,rollSm:r(74456).Z},M={code:"",phoneNumber:"",agreeRule:!0,agreeSendNoti:!0,otp:"",canResendOtp:!1,fullName:"",address:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.duration,r=e.onEnd,t=void 0===r?function(){return null}:r,a=(0,f.useState)(""),i=a[0],o=a[1];return(0,f.useEffect)((function(){var e,r,a=n,i=function(){e=parseInt(a/60,10),r=parseInt(a%60,10),e=e<10?"0"+e:e,r=r<10?"0"+r:r,--a<0&&(clearInterval(c),t()),o(e+":"+r)};i();var c=setInterval((function(){return i()}),1e3);return function(){return clearInterval(c)}}),[]),(0,T.jsx)("span",{style:{fontWeight:700},children:i})},z=function(e){(0,c.Z)(r,e);var n=D(r);function r(e){var i;return(0,a.Z)(this,r),i=n.call(this,e),(0,u.Z)((0,o.Z)(i),"initRef",(function(e){return function(n){return i._refs[e]=n}})),(0,u.Z)((0,o.Z)(i),"handleCommonChange",(function(e){return function(n,r){var t,a=i.state.errors;delete a[e],i.setState(R((t={},(0,u.Z)(t,e,n),(0,u.Z)(t,"errors",a),t),r))}})),(0,u.Z)((0,o.Z)(i),"handleChangTab",function(){var e=(0,t.Z)(p().mark((function e(n){var r,t,a,o,c,s,l,u,d;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=i.state,t=r.code,a=r.phoneNumber,r.agreeRule,r.agreeSendNoti,o=r.otp,c=r.fullName,s=r.address,l=i.props,u=l.i18n,d=l.breakpoints,{},e.t0=n,e.next=2===e.t0?6:3===e.t0?24:4===e.t0?34:44;break;case 6:if((0,b.mN)(t)&&(0,b.mN)(a)){e.next=9;break}return(0,x.ok)("sdc")("confirm",{msg:u.t("missingData")}),e.abrupt("return");case 9:if(!((0,b.mN)(t).length<9)){e.next=12;break}return(0,x.ok)("sdc")("confirm",{msg:u.t("fieldInvalid",{name:u.t("prizeCode")})}),e.abrupt("return");case 12:if((0,b.lw)(a)){e.next=15;break}return(0,x.ok)("sdc")("confirm",{msg:u.t("invalidPhone")}),e.abrupt("return");case 15:return(0,x.cn)(!0),e.next=18,(0,v.Mw)(1e3);case 18:return Math.random(),i.handleCommonChange("step")(n,M),d.down("md")&&(0,x.ok)("scrollPageToViewId")("enter_code_content"),(0,x.cn)(),e.abrupt("break",45);case 24:if((0,b.mN)(o)){e.next=27;break}return(0,x.ok)("sdc")("confirm",{msg:u.t("missingData")}),e.abrupt("return");case 27:return(0,x.cn)(!0),e.next=30,(0,v.Mw)(1e3);case 30:return i.handleCommonChange("step")(n,M),d.down("md")&&(0,x.ok)("scrollPageToViewId")("enter_code_content"),(0,x.cn)(),e.abrupt("break",45);case 34:if((0,b.mN)(c)&&s){e.next=37;break}return(0,x.ok)("sdc")("confirm",{msg:u.t("missingData")}),e.abrupt("return");case 37:return(0,x.cn)(!0),e.next=40,(0,v.Mw)(1e3);case 40:return i.handleCommonChange("step")(n,M),d.down("md")&&window.scrollTo({top:0,behavior:"instant"}),(0,x.cn)(),e.abrupt("break",45);case 44:return e.abrupt("break",45);case 45:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),(0,u.Z)((0,o.Z)(i),"handleActionRace",(function(e){return function(){var n=(0,t.Z)(p().mark((function n(r){var t,a,o,c;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=i.props,t.i18n,a=t.breakpoints,o=a.down("md")?1.7:1.8,n.t0=e,n.next="begin"===n.t0?5:"end"===n.t0?20:"update"===n.t0?27:"init"===n.t0?34:36;break;case 5:if(!i.racing){n.next=7;break}return n.abrupt("return");case 7:return(0,x.cn)(!0),n.next=10,(0,v.Mw)(1e3);case 10:return Math.random(),{},i.racingTime=0,i.racing=!0,i._refs.video.currentTime=2,i.showPrize=!1,a.down("md")&&window.scrollTo({top:0,behavior:"smooth"}),(0,x.cn)(),n.abrupt("break",42);case 20:if(i.racing){n.next=22;break}return n.abrupt("return");case 22:return i.racing=!1,c=function(e){e(),i.showPrize=!1},(0,x.ok)("sdc")("animation",{onClose:function(){(0,x.ok)("sdc")("winner",{noCloseClickOver:!0,onAccept:c})}}),i.showPrize=!0,n.abrupt("break",42);case 27:if(!i._refs.video){n.next=33;break}if(!(i._refs.video.currentTime>=o)||i.showPrize||i.racing){n.next=31;break}return i._refs.video.currentTime=0,n.abrupt("return");case 31:i.racingTime=i._refs.video.currentTime,i.racingTime>=8.8&&i.handleActionRace("end")();case 33:return n.abrupt("break",42);case 34:return r&&(i.initRef("video")(r),(0,v.hj)(i.racingTime)&&i.racingTime&&i._refs.video&&(i._refs.video.currentTime=i.racingTime)),n.abrupt("break",42);case 36:if(!i._refs.video){n.next=41;break}if(i._refs.video.playing||i._refs.video.play(),!(i._refs.video.currentTime>=o)||i.racing){n.next=41;break}return i._refs.video.currentTime=0,n.abrupt("return");case 41:return n.abrupt("break",42);case 42:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()})),(0,u.Z)((0,o.Z)(i),"_renderTickMsg",(function(e,n){var r=i.state[n],t=i.props,a=t.i18n,o=t.classes;return(0,T.jsxs)("div",{className:o.acceptPolicy,onClick:function(){return i.handleCommonChange(n)(!r)},children:[r?(0,T.jsx)(C.OO,{svg:!0,src:S.checked,size:27}):(0,T.jsx)("div",{className:o.uncheckIcon}),(0,T.jsx)("span",{children:a.t(e)})]})})),(0,u.Z)((0,o.Z)(i),"_renderStep",(function(){var e,n=i.state,r=n.step,t=n.code,a=n.fullName,o=n.otp,c=n.address,s=n.errors,l=n.canResendOtp,u=n.phoneNumber,d=(n.racing,i.props),p=d.i18n,m=d.classes;switch(r){case 1:e=(0,T.jsxs)("div",{id:"enter_code_content",className:m.content,children:[(0,T.jsx)(C.HU,{className:m.title,label:p.t("enterPrizeCode")}),(0,T.jsxs)("div",{className:m.inputFields,children:[(0,T.jsx)(C.oi,{autoFocus:!0,regex:"[A-Za-z0-9]",maxLength:9,inputRef:i.initRef("code"),isError:!!s.code,label:s.code||p.t("prizeCode"),plh:s.code||p.t("prizeCode"),value:t,onChangeText:function(e){return i.handleCommonChange("code")((0,b.Qx)("u",e))}}),(0,T.jsx)(C.oi,{inputRef:i.initRef("phoneNumber"),typeInput:"phone",isError:!!s.phoneNumber,label:s.phoneNumber||p.t("phoneNumber"),plh:s.phoneNumber||p.t("phoneNumber"),value:u,onChangeText:i.handleCommonChange("phoneNumber")})]}),(0,T.jsxs)("div",{className:m.agreeMsg,children:[i._renderTickMsg("agreeJoinEnterCodeMsg.1","agreeRule"),i._renderTickMsg("agreeJoinEnterCodeMsg.2","agreeSendNoti")]}),(0,T.jsx)(C.u5,{className:m.joinNow,text:p.t("joinNow"),onClick:function(){return i.handleChangTab(2)}})]});break;case 2:e=(0,T.jsxs)("div",{id:"enter_code_content",className:m.content,children:[(0,T.jsx)(C.HU,{className:m.title,label:p.t("verifyOTP")}),(0,T.jsx)("span",{className:m.otpMsg,children:p.t("otpWillBeSent2YourPhone")}),(0,T.jsx)("div",{className:m.verify,children:(0,T.jsx)(C.oi,{autoFocus:!0,maxLength:6,typeInput:"phone",inputRef:i.initRef("otp"),isError:!!s.otp,label:s.otp||p.t("otpCode"),plh:s.otp||p.t("otpCode"),value:o,onChangeText:i.handleCommonChange("otp")})}),(0,T.jsxs)("div",{className:m.countDown,children:[!l&&(0,T.jsxs)("div",{children:[(0,T.jsx)("span",{children:"".concat(p.t("time2ResendOtp"),": ")}),(0,T.jsx)(W,{duration:300,onEnd:function(){return i.handleCommonChange("canResendOtp")(!0)}})]}),(0,T.jsxs)("span",{className:_()(m.resendOTP,{canResend:l}),children:["".concat(p.t("notReceivedOtpCode")," "),(0,T.jsxs)("b",{onClick:function(){return l&&i.handleCommonChange("canResendOtp")()},children:[" ",p.t("resendOTP")]})]})]}),(0,T.jsx)(C.u5,{className:m.joinNow,text:p.t("confirm"),onClick:function(){return i.handleChangTab(3)}})]});break;case 3:e=(0,T.jsxs)("div",{id:"enter_code_content",className:m.content,children:[(0,T.jsx)(C.HU,{className:m.title,label:p.t("completeInformation")}),(0,T.jsxs)("div",{className:m.info,children:[(0,T.jsx)(C.oi,{autoFocus:!0,inputRef:i.initRef("fullName"),isError:!!s.fullName,label:s.fullName||p.t("fullName"),plh:s.fullName||p.t("fullName"),value:a,onChangeText:i.handleCommonChange("fullName")}),(0,T.jsx)(C.TD,{isError:!!s.address,label:s.address||p.t("province"),plh:s.address||p.t("province"),options:O.V$,value:c,onChange:i.handleCommonChange("address")})]}),(0,T.jsx)(C.u5,{className:m.joinNow,text:p.t("confirm"),onClick:function(){return i.handleChangTab(4)}})]});break;case 4:e=(0,T.jsxs)("div",{className:"container",children:[(0,T.jsxs)("div",{className:m.remainRoll,children:[(0,T.jsx)("span",{children:p.t("remainingSpins")}),(0,T.jsx)("span",{className:"number",children:"02"})]}),(0,T.jsx)(C.u5,{text:p.t("raceNow"),onClick:function(){return i.handleActionRace("begin")()}})]}),e=(0,T.jsxs)(f.Fragment,{children:[(0,T.jsx)(N.Z,{lgDown:!0,children:e}),(0,T.jsx)(N.Z,{lgUp:!0,children:(0,T.jsx)("div",{className:m.cLayout,children:e})})]}),e=(0,T.jsxs)(f.Fragment,{children:[(0,T.jsx)("div",{className:m.remainWrapper,children:e}),(0,T.jsx)("div",{className:m.raceList,style:{backgroundImage:"url("+E.smallPath+")",backgroundRepeat:"repeat"}})]})}return[1,2,3].includes(r)&&(e=(0,T.jsxs)(f.Fragment,{children:[(0,T.jsx)(N.Z,{lgDown:!0,children:e}),(0,T.jsx)(N.Z,{lgUp:!0,children:(0,T.jsx)("div",{className:m.cLayout,children:(0,T.jsx)("div",{className:m.mobileCtn,children:e})})})]})),e})),(0,u.Z)((0,o.Z)(i),"_renderBanner",(function(){var e=i.state.step,n={autoPlay:!0,playsInline:!0,width:"100%",onRef:i.handleActionRace("init"),onTimeUpdate:i.handleActionRace("update")},r=4===e,t=(0,T.jsx)(C.ff,{ratio:9/16,children:(0,T.jsx)(C.Rf,R(R({},n),{},{src:I.roll}))});return(0,T.jsxs)(f.Fragment,{children:[(0,T.jsx)(N.Z,{mdDown:!0,children:t}),(0,T.jsx)(N.Z,{mdUp:!0,children:r?(0,T.jsx)(f.Fragment,{children:(0,T.jsx)(C.ff,{ratio:5/4,children:(0,T.jsx)(C.Rf,R(R({},n),{},{src:I.rollSm}))})}):t})]})})),i.state=R({content:null,renderReady:!1,errors:{},step:1},M),i._refs={},i._mounted=!0,i}return(0,i.Z)(r,[{key:"componentDidMount",value:function(){this.props.breakpoints.down("md")&&setTimeout((function(){return(0,x.ok)("scrollPageToViewId")("enter_code_content")}),200)}},{key:"render",value:function(){var e=this.state.step,n=this.props.classes,r=(0,T.jsxs)("div",{className:n.container,children:[4===e&&(0,T.jsx)(C.$H,{className:n.backdrop,src:E.backdrop}),this._renderBanner(),this._renderStep()]});return(0,T.jsxs)("div",{className:n.wrapper,onClick:this.handleActionRace(),children:[(0,T.jsx)(N.Z,{lgDown:!0,children:(0,T.jsx)("div",{className:n.cLayout,children:r})}),(0,T.jsx)(N.Z,{lgUp:!0,children:r})]})}}]),r}(f.Component),q=(0,m.qCK)((0,g.Z)(),(0,h.Z)("winner"),(0,j.Z)((function(e){var n,r=e.palette,t=e.breakpoints;return y(y({},(0,w.RU)({breakpoints:t})),{},{wrapper:{position:"relative"},backdrop:(0,u.Z)({position:"absolute",top:0,left:0,right:0,bottom:0},t.down("md"),{background:r.primary.main,"&>img":{display:"none"}}),container:y(y({zIndex:1,position:"relative",padding:0},w.Gq.flexColCenter),{},(0,u.Z)({},t.up("lg"),{padding:"72px 0"})),content:y({width:"100%"},w.Gq.flexColCenter),mobileCtn:y({marginBottom:24},w.Gq.flexColCenter),title:(0,u.Z)({marginTop:24},t.up("lg"),{marginTop:48}),inputFields:y(y({marginTop:44,width:"100%",gap:16},w.Gq.flexColumn),{},(0,u.Z)({},t.up("lg"),{flexDirection:"row",justifyContent:"center","&>div":{maxWidth:360}})),acceptPolicy:{display:"flex",gap:8,cursor:"pointer","&>span":y({display:"inline-block",marginTop:2},w.Gq.noneUserSelect)},joinNow:(0,u.Z)({marginTop:32},t.up("lg"),{marginTop:52}),otpMsg:{marginTop:44,display:"inline-block",textAlign:"center"},verify:(0,u.Z)({marginTop:16,width:"100%"},t.up("lg"),{maxWidth:400}),countDown:y({marginTop:16,gap:8,color:r.error.main},w.Gq.flexColCenter),resendOTP:y(y({color:r.primary.main,opacity:.5},w.Gq.noneUserSelect),{},{"&.canResend":{opacity:1,"&>b":{color:r.error.main,cursor:"pointer"}}}),info:y(y({marginTop:44,gap:16,width:"100%"},w.Gq.flexColumn),{},(0,u.Z)({},t.up("lg"),{flexDirection:"row",justifyContent:"center","&>div":{minWidth:360,maxWidth:360}})),remainWrapper:(0,u.Z)({zIndex:1,position:"relative",width:"100%",background:r.white.main,padding:"32px 0","& .container":y(y({gap:16},w.Gq.flexColCenter),{},(0,u.Z)({},t.up("lg"),{flexDirection:"row"}))},t.up("lg"),{padding:"36px 64px"}),remainRoll:y(y({gap:36,width:"100%",lineHeight:"normal",justifyContent:"space-between"},w.Gq.flexRowCenter),{},(n={},(0,u.Z)(n,t.up("lg"),{justifyContent:"flex-start"}),(0,u.Z)(n,"&>span",{fontSize:18,fontWeight:800,color:r.primary.main,fontStyle:"italic"}),(0,u.Z)(n,"& .number",{fontSize:48,textAlign:"right",color:r.error.main}),n)),raceList:{height:40,width:"100%",zIndex:1,position:"relative"},uncheckIcon:{minHeight:27,maxHeight:27,minWidth:27,maxWidth:27,background:r.background.primary,borderRadius:6},agreeMsg:y(y({marginTop:40,gap:24,maxWidth:532},w.Gq.flexColumn),{},(0,u.Z)({},t.down("lg"),{marginTop:16,gap:16}))})})))(z)},43843:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tham-gia-du-thuong",function(){return r(43771)}])},60714:function(e,n,r){"use strict";r.r(n),n.default="/_next/static/chunks/media/images/checked.c9b52be808bba78d42c8.svg"},11098:function(e,n){"use strict";n.Z="/_next/static/chunks/media/playback/Castrol_16x9.534887479eb809435177.mp4"},74456:function(e,n){"use strict";n.Z="/_next/static/chunks/media/playback/Castrol_4x5.5357117afe7664db10e0.mp4"},17762:function(e,n,r){"use strict";r.r(n),n.default="/_next/static/chunks/media/images/bg_enter_code.c6bee855089e95546bf3.png"},9422:function(e,n,r){"use strict";r.r(n),n.default="/_next/static/chunks/media/images/bg_green.84c3a3377f2a345b9e23.png"},61194:function(e,n){"use strict";n.Z="/_next/static/chunks/media/images/bg_small_path.4fc4161eaf3487435a01.png"}},function(e){e.O(0,[774,888,179],(function(){return n=43843,e(e.s=n);var n}));var n=e.O();_N_E=n}]);