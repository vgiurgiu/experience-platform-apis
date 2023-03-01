"use strict";(self.webpackChunkexperience_platform_apis=self.webpackChunkexperience_platform_apis||[]).push([[823],{65612:function(e,t,a){a.r(t);var n=a(15861),f=a(64687),o=a.n(f),r=a(15007),i=a(35414),c=a(95223),d=a(40156),s=a(36440),b=a.n(s),l=a(1597),p=a(96633),m=a.n(p),u=a(158),h=(a(78248),a(26777)),v=a(88466),y=a(34899),g=a(1110),w=a(78269),k=a(73181),S=a(77158);var A=!(!{}.GATSBY_ALGOLIA_APPLICATION_ID||!{}.GATSBY_ALGOLIA_SEARCH_API_KEY),I={}.GATSBY_ALGOLIA_INDEX_ENV_PREFIX,P=null;A?P=b()({}.GATSBY_ALGOLIA_APPLICATION_ID,{}.GATSBY_ALGOLIA_SEARCH_API_KEY):console.warn("AIO: Algolia config missing.");var x=!(!{}.GATSBY_IMS_SRC||!{}.GATSBY_IMS_CONFIG),Z={openAPI:{src:null,block:null,frontMatter:"openAPISpec"},frame:{src:null,block:null,frontMatter:"frameSrc"}},_=function(e){e((function(e){return!e}))},G=function(e){return new Promise((function(t,a){var n=document.createElement("script");n.src=e,n.onload=function(e){return t(e)},n.onerror=function(e){return a(e)},n.onabort=function(e){return a(e)},document.head.appendChild(n)}))},L=function(e,t,n){var f=Z[e];f.has=null==t?void 0:t[f.frontMatter],void 0!==f.has&&f.src!==f.has&&(f.src=f.has),f.src&&!f.block&&(n(!0),"openAPI"===e?f.block=(0,d.ZP)((function(){return Promise.all([a.e(490),a.e(723),a.e(461),a.e(351),a.e(196)]).then(a.bind(a,61284))})):"frame"===e&&(f.block=(0,d.ZP)((function(){return Promise.all([a.e(490),a.e(351),a.e(8)]).then(a.bind(a,96008))}))),f.block.load().then((function(){n(!1)})))},E={name:"hr37al",styles:"grid-area:main"},C={name:"boasoc",styles:"min-height:100vh;background-color:var(--spectrum-global-color-gray-50)"},M={name:"1wwehzg",styles:"min-height:100vh;background-color:transparent"};t.default=function(e){var t=e.children,a=e.pageContext,f=e.location,d=(0,r.useState)(null),s=d[0],b=d[1],p=(0,r.useState)(!0),O=p[0],z=p[1],B=(0,r.useState)(!1),N=B[0],T=B[1];(0,r.useEffect)((function(){var e={}.GATSBY_IMS_SRC,t={}.GATSBY_IMS_CONFIG;e&&t?(0,n.Z)(o().mark((function a(){var n;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,G(""+e);case 3:(n=JSON.parse(t)).onReady=function(){b(window.adobeIMS),z(!1)},window.adobeImsFactory.createIMSLib(n),window.adobeIMS.initialize(),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.error("AIO: IMS error.");case 12:return a.prev=12,z(!1),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[0,9,12,15]])})))():(console.warn("AIO: IMS config missing."),z(!1))}),[]),(0,r.useEffect)((function(){A&&m().get("https://raw.githubusercontent.com/AdobeDocs/search-indices/main/product-index-map.json").then((function(e){var t=e.data;"string"==typeof t?T(JSON.parse(t)):"[object Array]"==Object.prototype.toString.call(t)&&T(t)})).catch((function(e){console.error("AIO: Failed fetching search index.\n"+e)}))}),[]);var Y=(0,l.K2)("915530536"),F=Y.allMdx,R=Y.allSitePage,q=Y.site,j=Y.allGithub,D=Y.allGithubContributors,H=q.siteMetadata,K=q.pathPrefix,U=H.home,X=H.versions,J=H.pages,Q=H.subPages,V=H.docs,W=(0,r.useState)(!1),$=W[0],ee=W[1],te=(0,r.useState)(!1),ae=te[0],ne=te[1],fe=(0,r.useState)(!1),oe=fe[0],re=fe[1];(0,r.useEffect)((function(){new URL(window.location).searchParams.get(u.AQ.query)&&ee(!0)}),[ee]),(0,r.useEffect)((function(){window.onpopstate=function(){new URL(window.location).searchParams.get(u.AQ.query)?ee(!0):ee(!1)}}),[]),f.pathname=(0,u.Dm)(decodeURIComponent(f.pathname)),J.forEach((function(e){(0,u.y)(e),e.menu&&e.menu.forEach((function(e){(0,u.y)(e)}))})),X&&X.forEach((function(e){(0,u.y)(e)})),(0,u.y)(U),(0,u.y)(V);var ie=function e(t){(0,u.y)(t),t.pages&&t.pages.forEach((function(t){e(t)}))};Q&&Q.forEach((function(e){ie(e)}));var ce=(0,u.A6)(f.pathname),de=(0,u.Gh)(J),se=(0,u.Lh)(ce,Q),be=(0,u.mL)(ce,de,Q),le=be.length>0,pe=null==a?void 0:a.frontmatter,me=(0,S.ZP)(),ue=(0,S.ZP)(),he="aio-Search-close";return L("openAPI",pe,re),L("frame",pe,re),"/search-frame"===K?(0,c.tZ)(r.default.Fragment,null,(0,c.tZ)(i.q,null,(0,c.tZ)("noscript",null,"\n          <style>\n            #"+me+" {\n              grid-template-columns: 0 auto;\n            }\n            \n            #"+ue+" {\n              display: none !important;\n            }\n            \n            .gatsby-resp-image-image {\n              opacity: 1 !important;\n            }\n          </style>\n        ")),(0,c.tZ)(c.xB,{styles:(0,c.iv)("@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff2'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff2'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('opentype');font-display:swap;font-style:italic;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff2'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:700;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff2'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:300;}@font-face{font-family:'adobe-clean-serif';src:url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff2'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:900;}html,body{margin:0;text-size-adjust:none;overscroll-behavior:auto contain;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:transparent;",$&&"overflow: hidden;",";}*[hidden]{display:none!important;}")}),(0,c.tZ)("div",{dir:"ltr",className:"spectrum spectrum--medium spectrum--large spectrum--light","color-scheme":"light",css:M},A&&N&&(0,c.tZ)(v.o,{algolia:P,indexAll:N,indexPrefix:I||"",showSearch:!0,setShowSearch:ee,searchButtonId:he,isIFramed:!0}))):(0,c.tZ)(r.default.Fragment,null,(0,c.tZ)(i.q,null,(0,c.tZ)("noscript",null,"\n          <style>\n            #"+me+" {\n              grid-template-columns: 0 auto;\n            }\n            \n            #"+ue+" {\n              display: none !important;\n            }\n            \n            .gatsby-resp-image-image {\n              opacity: 1 !important;\n            }\n          </style>\n        ")),(0,c.tZ)(c.xB,{styles:(0,c.iv)("@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff2'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff2'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('opentype');font-display:swap;font-style:italic;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff2'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:700;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff2'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:300;}@font-face{font-family:'adobe-clean-serif';src:url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff2'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:900;}html,body{margin:0;text-size-adjust:none;overscroll-behavior:auto contain;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;",$&&"overflow: hidden;",";}*[hidden]{display:none!important;}")}),(0,c.tZ)(h.z,{value:{ims:s,isLoadingIms:O,location:f,pageContext:a,hasSideNav:le,siteMetadata:H,pathPrefix:K,allSitePage:R,allMdx:F,allGithub:j,allGithubContributors:D}},(0,c.tZ)(w.H,{title:null==pe?void 0:pe.title,description:null==pe?void 0:pe.description,keywords:null==pe?void 0:pe.keywords}),(0,c.tZ)("div",{dir:"ltr",className:"spectrum spectrum--medium spectrum--large spectrum--light","color-scheme":"light",css:C},(0,c.tZ)(r.default.Fragment,null,(0,c.tZ)("div",{id:me,css:(0,c.iv)("display:grid;grid-template-areas:'header header' 'sidenav main';grid-template-rows:var(--spectrum-global-dimension-size-800);grid-template-columns:",le?u.dP+" auto":"0 auto",";@media screen and (max-width: ",u.Av,"){grid-template-columns:0 auto;}@media screen and (max-width: ",u.q9,"){grid-template-rows:var(--spectrum-global-dimension-size-1200);}")},(0,c.tZ)("div",{css:(0,c.iv)("grid-area:header;position:fixed;height:var(--spectrum-global-dimension-size-800);left:0;right:0;background-color:var(--spectrum-global-color-gray-50);z-index:2;@media screen and (max-width: ",u.q9,"){height:var(--spectrum-global-dimension-size-600);}")},(0,c.tZ)(g.e,{hasIMS:x,ims:s,isLoadingIms:O,home:U,versions:X,pages:J,docs:V,location:f,hasSideNav:le,toggleSideNav:function(){_(ne)},hasSearch:A&&null!==N,showSearch:$,setShowSearch:ee,searchButtonId:he})),(0,c.tZ)("div",{id:ue,hidden:!le,css:(0,c.iv)("grid-area:sidenav;position:fixed;z-index:1;width:",u.dP,";height:100%;background-color:var(--spectrum-global-color-gray-75);@media screen and (max-width: ",u.Av,"){transition:transform var(--spectrum-global-animation-duration-200) ease-in-out;transform:translateX(",ae?"0":"-100%",");}")},le&&(0,c.tZ)(y.k,{selectedPages:se,selectedSubPages:be,setShowSideNav:ne})),(0,c.tZ)("div",{css:E},(0,c.tZ)("main",{hidden:!Z.openAPI.has},Z.openAPI.src&&Z.openAPI.block&&(0,r.createElement)(Z.openAPI.block,{src:Z.openAPI.src})),(0,c.tZ)("main",{hidden:!Z.frame.has},Z.frame.src&&Z.frame.block&&(0,r.createElement)(Z.frame.block,{src:Z.frame.src,height:null==pe?void 0:pe.frameHeight,location:f})),!Z.openAPI.has&&!Z.frame.has&&t)),A&&$&&N&&(0,c.tZ)(v.o,{algolia:P,indexAll:N,indexPrefix:I||"",showSearch:$,setShowSearch:ee,searchButtonId:he}),(0,c.tZ)("div",{css:(0,c.iv)("position:fixed;top:0;left:0;right:0;bottom:0;display:",oe?"grid":"none",";place-items:center center;")},(0,c.tZ)(k._,{size:"L"})),le&&(0,c.tZ)("div",{role:"presentation",css:(0,c.iv)("display:none;@media screen and (max-width: ",u.Av,"){display:block;transition:opacity 160ms ease-in;background-color:rgba(0, 0, 0, 0.4);pointer-events:none;opacity:0;position:fixed;top:0;left:0;height:100%;width:100%;",ae&&"\n                    pointer-events: auto;\n                    opacity: 1;\n                  ",";}"),onClick:function(){_(ne)}})))))}}}]);
//# sourceMappingURL=ff106bf9-d77f3cfc9a7b3891367d.js.map