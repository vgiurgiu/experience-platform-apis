"use strict";(self.webpackChunkexperience_platform_apis=self.webpackChunkexperience_platform_apis||[]).push([[7602],{32074:function(e,t,i){i.d(t,{l:function(){return x}});var a=i(63366),n=i(15007),s=i(95223),r=i(44264),l=i(247),o=i(75900),d=i.n(o),m=i(32693),c=i(21198),u=["className","theme","imageStyle","swiperSpeed","delay","enableNavigation","varient","slideTheme","bulletActiveClass","bulletClass","navigationPre","navigationNext","isCenter"];c.ZP.use([c.pt,c.tl,c.W_]);var p=function(e){var t=e.texts,i=e.index;return t.slots.split(",").map((function(e){return e.trim()})).filter((function(e){return e.startsWith("text")})).map((function(e){return t[""+e+i]}))},g=function(e){var t=e.textKeys,i=e.heading,a=e.image,n=e.imageStyle,o=e.buttons,m=e.props,c=e.backgroundColor,u=e.index,g=e.slideTheme,v=e.theme,h=e.centerAlignament,x=e.isCenter;return(0,s.tZ)("div",{className:d()("spectrum--"+(g||v)),css:(0,s.iv)("display:flex;",c," margin-bottom:var(--spectrum-global-dimension-size-500);flex-direction:row;@media screen and (max-width: ",r.LU,"){flex-direction:column;max-width:calc(",(0,r.MY)(6),")!important;}@media screen and (max-width: ","767px","){max-width:calc(",(0,r.MY)(3.5),")!important;padding-left:var(--spectrum-global-dimension-size-200);}","")},a?(0,s.tZ)("div",{css:(0,s.iv)("flex:1;justify-content:center;@media screen and (max-width: ",r.Av,"){margin:auto;}@media screen and (max-width: ",r.q9,"){margin:0;max-width:calc(",(0,r.MY)(3.5),")!important;}@media screen and (max-width: ",r.LU,"){max-width:calc(",(0,r.MY)(6),")!important;margin:0;}","")},(0,s.tZ)("h2",null,(0,s.tZ)(l.ZG,{image:a,styles:n}))):null,t.length>0||i||o?(0,s.tZ)("div",{css:(0,s.iv)("text-align:left;flex:1;padding-bottom:var(--spectrum-global-dimension-size-200);@media only screen and (min-width: ","375px",") and(max-width:",r.q9,"){margin:0;background:red;text-align:center!important;max-width:calc(",(0,r.MY)(3.5),")!important;padding-left:var(--spectrum-global-dimension-size-100)!important;}",x&&h,";","")},i&&(0,s.tZ)("h3",{className:"spectrum-Heading--sizeL",css:(0,s.iv)("@media only screen and (max-width: ",r.q9,"){font-size:18px!important;}","")},i.props.children),t.length>0?(0,s.tZ)("div",{className:"textWrapper",css:(0,s.iv)("@media only screen and (max-width: ",r.q9,"){&>h3{font-size:var(--spectrum-alias-heading-xxs-text-size)!important;}}","")},(0,s.tZ)(p,{texts:m,index:u})):null,o?(0,s.tZ)("div",{css:(0,s.iv)("margin-top:var(--spectrum-global-dimension-size-200);@media only screen and (max-width: ",r.q9,"){div:first-child{justify-content:center!important;}}","")},(0,s.tZ)(l.F5,{buttons:o})):null):null)},v={name:"1n796wp",styles:"background:var(--spectrum-global-color-gray-100);padding:var(--spectrum-global-dimension-size-600) 0 var(--spectrum-global-dimension-size-200) 0"},h={name:"1n796wp",styles:"background:var(--spectrum-global-color-gray-100);padding:var(--spectrum-global-dimension-size-600) 0 var(--spectrum-global-dimension-size-200) 0"},x=function(e){var t=e.className,i=e.theme,l=void 0===i?"dark":i,o=e.imageStyle,c=void 0===o?"":o,p=e.swiperSpeed,x=void 0===p?600:p,b=e.delay,w=void 0===b?2500:b,f=e.enableNavigation,y=void 0!==f&&f,Z=e.varient,k=void 0===Z?"default":Z,N=e.slideTheme,C=e.bulletActiveClass,q=void 0===C?"swiper-pagination-bullet-active":C,z=e.bulletClass,A=void 0===z?"swiper-pagination-bullet":z,S=e.navigationPre,M=void 0===S?"swiper-button-prev":S,Y=e.navigationNext,L=void 0===Y?"swiper-button-next":Y,P=e.isCenter,W=void 0!==P&&P,K=(0,a.Z)(e,u),T=Object.keys(K).filter((function(e){return e.startsWith("image")}));T=T.map((function(e,t){return{image:K[e],heading:K["heading"+t],buttons:K["buttons"+t],bgimage:K["bgimage"+t]}}));var _=K.slots.split(",").filter((function(e){return e.trim().startsWith("text")})),E="background-color: var(--spectrum-global-color-gray-"+("light"===N?"50":"")+");";if("default"===k)return(0,s.tZ)("section",{className:d()(t,"spectrum--"+l),css:h,role:"button",tabindex:0,onKeyDown:function(e){"ArrowRight"===e.key&&document.querySelector(".swiper").swiper.slideNext();"ArrowLeft"===e.key&&document.querySelector(".swiper").swiper.slidePrev()}},(0,s.tZ)("div",{css:(0,s.iv)("max-width:calc(",(0,r.MY)(12),");margin:auto;@media screen and (max-width: ",r.q9,"){max-width:calc(",(0,r.MY)(2.75),")!important;}@media screen and (min-width: ",r.q9,") and (max-width: ",r.LU,"){padding-bottom:0;margin-top:0;max-width:calc(",(0,r.MY)(6),")!important;}","")},(0,s.tZ)(m.tq,{speed:x,slidesPerView:"auto",autoplay:{delay:w},pagination:{bulletActiveClass:q,bulletClass:A,clickable:!0},navigation:{nextEl:"."+L,prevEl:"."+M}},T.map((function(e,t){return(0,s.tZ)(m.o5,{key:t},(0,s.tZ)(g,{textKeys:_,heading:e.heading,image:e.image,imageStyle:c,buttons:e.buttons,props:K,backgroundColor:E,index:t,slideTheme:N,theme:l}),y?(0,s.tZ)(n.default.Fragment,null,(0,s.tZ)("div",{className:M}),(0,s.tZ)("div",{className:L})):null)})))));if("fullWidth"===k){return(0,s.tZ)("section",{className:d()(t,"spectrum--"+l),css:v,role:"button",tabindex:0,onKeyDown:function(e){"ArrowRight"===e.key&&document.querySelector(".swiper").swiper.slideNext();"ArrowLeft"===e.key&&document.querySelector(".swiper").swiper.slidePrev()}},(0,s.tZ)(m.tq,{speed:x,slidesPerView:"auto",autoplay:{delay:w},pagination:{bulletActiveClass:q,bulletClass:A,clickable:!0},navigation:{nextEl:"."+L,prevEl:"."+M}},T.map((function(e,t){var i;return(0,s.tZ)(m.o5,{key:t},(0,s.tZ)("div",{css:(0,s.iv)("width:100%;@media screen and (max-width: ",r.q9,"){width:100%!important;}",""),className:null===(i=e.bgimage.props)||void 0===i?void 0:i.children},(0,s.tZ)("div",{css:(0,s.iv)("max-width:calc(",(0,r.MY)(12),");margin:auto;@media screen and (min-width: ",r.q9,") and (max-width: ",r.LU,"){max-width:calc(",(0,r.MY)(6),");}","")},(0,s.tZ)(g,{textKeys:_,heading:e.heading,image:e.image,imageStyle:c,buttons:e.buttons,props:K,backgroundColor:E,index:t,slideTheme:N,theme:l,isCenter:W,centerAlignament:"margin:auto"}),y?(0,s.tZ)("div",null,(0,s.tZ)("div",{className:M}),(0,s.tZ)("div",{className:L})):null)))}))))}}}}]);
//# sourceMappingURL=c9f1e04f-ba682a6d30e78f5ba420.js.map