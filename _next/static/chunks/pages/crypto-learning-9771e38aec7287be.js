(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23],{1681:function(e,t,n){"use strict";n.d(t,{q:function(){return l}});var i=n(7294),a=n(4141),r=i.createElement,o=a.ZP.div.withConfig({displayName:"Avatar__Container",componentId:"sc-1jinx27-0"})(["min-width:120px;",""],{display:"flex",alignItems:"center"}),l=function(e){var t=e.name,n=e.picture;return r(o,null,n&&r(c,{src:n,alt:t}),r(s,null,t))},c=(0,a.ZP)("img").withConfig({displayName:"Avatar___StyledImg",componentId:"sc-1jinx27-1"})({marginRight:"1rem",height:"2.5rem",width:"2.5rem",borderRadius:"9999px"}),s=(0,a.ZP)("div").withConfig({displayName:"Avatar___StyledDiv",componentId:"sc-1jinx27-2"})({fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"500","--tw-text-opacity":"1",color:"rgb(200 199 216 / var(--tw-text-opacity))"})},9595:function(e,t,n){"use strict";n.d(t,{z:function(){return N}});var i=n(1531),a=n(607),r=n(7294),o=n(4141),l=n(1526),c=n(7064),s=n(1664),m=n.n(s),u=n(1681),g=n(1370),d=n(9426),p=r.createElement,f=o.ZP.div.withConfig({displayName:"CmsPostPreview__Contents",componentId:"sc-jxb7gy-0"})(["transition:all 0.2s ease-in-out;&:hover{filter:brightness(1.1);transform:scale(1.02);}cursor:pointer;"]),y=o.ZP.div.withConfig({displayName:"CmsPostPreview__Badge",componentId:"sc-jxb7gy-1"})(["height:21px;margin-top:3px;font-size:11px;line-height:11px;padding-left:6px;padding-right:5px;",""],{marginLeft:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"0.75rem","--tw-bg-opacity":"1",backgroundColor:"rgb(105 102 255 / var(--tw-bg-opacity))",textTransform:"uppercase",letterSpacing:"0.05em","--tw-text-opacity":"1",color:"rgb(250 250 253 / var(--tw-text-opacity))"}),h=function(e){var t,n=e.slug,i=e.title,a=e.coverImage,r=e.date,o=e.excerpt,l=e.author,c=e.isNew,s=e.locale,d=e.location;return p(m(),{as:"/".concat(d,"/").concat(n),href:"/".concat(d,"/[slug]")},p(f,null,a&&p(g.y,{title:a.title,src:"".concat(a.url,"?w=500"),width:a.width,height:a.height}),p(v,null,i,c&&p(y,null,"New")),p(w,null,o),p(_,null,l&&p(u.q,{name:l.name,picture:null===(t=l.avatar)||void 0===t?void 0:t.url}),p(x,{dateString:r,locale:s}))))},v=(0,o.ZP)("h2").withConfig({displayName:"CmsPostPreview___StyledH",componentId:"sc-jxb7gy-2"})({marginBottom:"0.75rem",display:"flex",flexDirection:"row",alignItems:"center",fontSize:"1.5rem",lineHeight:"1.375",fontWeight:"500"}),w=(0,o.ZP)("p").withConfig({displayName:"CmsPostPreview___StyledP",componentId:"sc-jxb7gy-3"})({marginBottom:"1rem",fontSize:"1.025rem",lineHeight:"1.625","--tw-text-opacity":"1",color:"rgb(128 126 152 / var(--tw-text-opacity))"}),_=(0,o.ZP)("footer").withConfig({displayName:"CmsPostPreview___StyledFooter",componentId:"sc-jxb7gy-4"})({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}),x=(0,o.ZP)(d.E).withConfig({displayName:"CmsPostPreview___StyledDate",componentId:"sc-jxb7gy-5"})({fontSize:"0.75rem",lineHeight:"1rem",textTransform:"uppercase",letterSpacing:"0.05em","--tw-text-opacity":"1",color:"rgb(128 126 152 / var(--tw-text-opacity))"}),C=r.createElement;function b(){b=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,i,r){var o=new RegExp(e,i);return t.set(o,r||t.get(e)),(0,a.Z)(o,n.prototype)}function r(e,n){var i=t.get(n);return Object.keys(i).reduce(function(t,n){var a=i[n];if("number"==typeof a)t[n]=e[a];else{for(var r=0;void 0===e[a[r]]&&r+1<a.length;)r++;t[n]=e[a[r]]}return t},Object.create(null))}return(0,i.Z)(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);if(n){n.groups=r(n,this);var i=n.indices;i&&(i.groups=r(i,this))}return n},n.prototype[Symbol.replace]=function(n,i){if("string"==typeof i){var a=t.get(this);return e[Symbol.replace].call(this,n,i.replace(/\$<([^>]+)>/g,function(e,t){var n=a[t];return"$"+(Array.isArray(n)?n.join("$"):n)}))}if("function"==typeof i){var o=this;return e[Symbol.replace].call(this,n,function(){var e=arguments;return"object"!=typeof e[e.length-1]&&(e=[].slice.call(e)).push(r(e,o)),i.apply(this,e)})}return e[Symbol.replace].call(this,n,i)},b.apply(this,arguments)}var P=o.ZP.div.withConfig({displayName:"CmsPosts__Filters",componentId:"sc-1uka18i-0"})(["display:flex;padding:1.25em;flex-wrap:wrap;justify-content:center;align-items:center;> label,> a{margin:0.5em;> input[type='checkbox']{display:none;}> span{cursor:pointer;display:block;padding:0.3em 1em;border-radius:2em;background-color:hsla(240,100%,90%,0.1);backdrop-filter:blur(6px);color:rgba(255,255,255,0.6);transition:0.3s;&:hover{background-color:hsla(240,100%,90%,0.15);}}}label > input[type='checkbox']:checked + span,a:focus > span{background-color:#12121d;background-color:hsla(240,100%,10%,0.25);color:#fff;box-shadow:0 0 0 2px hsla(240,100%,90%,0.2);}"]),S=function(){var e,t,n,i;return null!==(e=null===(t=globalThis.location)||void 0===t?void 0:null===(n=t.hash)||void 0===n?void 0:null===(i=n.match(b(/^#([^/]*)(?:\/([^/]*))?$/,{tag:1,slug:2})))||void 0===i?void 0:i.groups)&&void 0!==e?e:{}},k=function(e){var t=e.selectedTag,n=e.selectedSlug;return"#".concat(null!=t?t:"").concat(n?"/".concat(n):"")},N=function(e){var t=e.cmsPostPreviews,n=e.cmsPostTags,i=e.emptyStateMessage,a=e.additionalLinks,o=e.additionalContentTypes,s=e.locale,m=e.location,u=e.stringGetter,g=(0,r.useState)(void 0),d=g[0],p=g[1],f=(0,r.useMemo)(function(){return null==o?void 0:o.find(function(e){return e.slug===d})},[d]),y=(0,r.useState)(void 0),v=y[0],w=y[1],_=t.filter(function(e){var t;return"featured"===d?e.isFeatured:!d||(null===(t=e.tagsCollection.items)||void 0===t?void 0:t.some(function(e){return e.slug===d}))}),x=function(e){var t=e.slug,n=e.name;return C("label",{key:t},C("input",{type:"checkbox",value:t,name:"cmsPostTag",checked:(null!=d?d:"")===t,onChange:function(e){return p(e.target.checked?t:void 0)}}),C("span",null,n))},b=(0,r.useCallback)(function(){var e=S(),t=e.tag,n=e.slug;p(t),w((null==o?void 0:o.find(function(e){return e.slug===d}))?n:void 0)},[]);return(0,r.useEffect)(function(){var e;return b(),null===(e=globalThis.window)||void 0===e||e.addEventListener("hashchange",b),function(){var e;return null===(e=globalThis.window)||void 0===e?void 0:e.removeEventListener("hashchange",b)}},[]),(0,r.useEffect)(function(){globalThis.location=k({selectedTag:d,selectedSlug:v})},[d,v]),C(r.Fragment,null,C(P,null,C(x,{slug:"",name:u({key:"ALL"})}),C(x,{slug:"featured",name:u({key:"FEATURED"})}),n.filter(function(e){return e.topLevel}).map(function(e){return C(x,{key:e.slug,slug:e.slug,name:e.name})}),null==o?void 0:o.map(function(e){var t=e.slug,n=e.name;return e.render,C(x,{key:t,slug:t,name:n})}),null==a?void 0:a.map(function(e){var t=e.href;return C("a",{key:t,href:t},C("span",null,e.name,"\xa0→"))})),C(I,null,C(l.M,{initial:!1},f?C(E,{key:f.slug,transition:{duration:.15,ease:"easeOut"},initial:{opacity:0,transform:"scale(0.98)"},animate:{opacity:1,transform:"scale(1)"},exit:{duration:.1,opacity:0,transform:"scale(0.98)"}},f.render({selectedSlug:v})):C(T,{key:"cmsPosts",transition:{duration:.15,ease:"easeOut"},initial:{opacity:0,transform:"scale(0.98)"},animate:{opacity:1,transform:"scale(1)"},exit:{duration:.1,opacity:0,transform:"scale(0.98)"}},C(l.M,null,!_.length&&C(R,{transition:{duration:.2,ease:"easeOut"},initial:{opacity:0,transform:"translateY(3em)"},animate:{opacity:1,transform:"translateY(0em)"},exit:{opacity:0,transform:"translateY(3em)"}},i||u({key:"BLOG_POSTS_NOT_FOUND"}))),C(l.M,{initial:!1},_.map(function(e,n){return C(c.E.article,{key:e.slug,layout:"position",transition:{duration:.35,ease:[.16,1,.3,1]},initial:{opacity:0,transform:"scale(0.5)"},animate:{opacity:1,transform:"scale(1)"},exit:{opacity:0,transform:"scale(0.5)"}},C(h,{slug:e.slug,title:e.title,coverImage:e.coverImage,date:e.publishDate,author:e.author,excerpt:e.excerpt,isNew:e===t[0],locale:s,location:m}))}))))))},I=o.ZP.div.withConfig({displayName:"CmsPosts__Stack",componentId:"sc-1uka18i-1"})(["display:grid;grid-template:'Stack';justify-items:center;align-items:start;> *{grid-area:Stack;}"]),E=(0,o.ZP)(c.E.div).withConfig({displayName:"CmsPosts___StyledMotionDiv",componentId:"sc-1uka18i-2"})({gridColumnStart:"1",gridRowStart:"1",marginTop:"3rem",textAlign:"center"}),T=(0,o.ZP)(c.E.div).withConfig({displayName:"CmsPosts___StyledMotionDiv2",componentId:"sc-1uka18i-3"})({gridColumnStart:"1",gridRowStart:"1",marginLeft:"3rem",marginRight:"3rem",marginBottom:"8rem",marginTop:"3rem",display:"grid",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",rowGap:"3rem","@media (min-width: 640px)":{marginLeft:"6rem",marginRight:"6rem"},"@media (min-width: 768px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))",columnGap:"3rem",rowGap:"6rem"},"@media (min-width: 1024px)":{columnGap:"3rem"},"@media (min-width: 1280px)":{gridTemplateColumns:"repeat(3, minmax(0, 1fr))"}}),R=(0,o.ZP)(c.E.div).withConfig({displayName:"CmsPosts___StyledMotionDiv3",componentId:"sc-1uka18i-4"})({gridColumnStart:"1",gridRowStart:"1",marginTop:"3rem",textAlign:"center"})},1370:function(e,t,n){"use strict";n.d(t,{y:function(){return c}});var i=n(7294),a=n(4141),r=i.createElement,o=a.ZP.div.withConfig({displayName:"CoverImage__ImageContainer",componentId:"sc-1tnziqn-0"})(["",""],{marginBottom:"1rem",maxWidth:"64rem"}),l=a.ZP.img.withConfig({displayName:"CoverImage__Image",componentId:"sc-1tnziqn-1"})(["user-drag:none !important;"]),c=function(e){var t=e.title,n=e.src,i=e.height,a=e.width;return r(o,{className:e.className},r(l,{src:n,alt:"".concat(t),width:a,height:i}))}},9426:function(e,t,n){"use strict";n.d(t,{E:function(){return a}});var i=n(7294).createElement,a=function(e){var t=e.dateString,n=e.locale;return i("time",{dateTime:t,className:e.className},new globalThis.Date(t).toLocaleDateString(n,{dateStyle:"medium"}))}},585:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var i=n(7294),a=n(4141),r=n(2962),o=n(8182),l=n(4061),c=n(9595),s=i.createElement,m=a.ZP.div.withConfig({displayName:"crypto-learning__Centered",componentId:"sc-b5t1gs-0"})({marginTop:"3rem",marginBottom:"3rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),u=a.ZP.h1.withConfig({displayName:"crypto-learning__Heading",componentId:"sc-b5t1gs-1"})({marginLeft:"2rem",marginRight:"2rem",marginTop:"0.5rem",textAlign:"center",fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"500","@media (min-width: 640px)":{fontSize:"2.25rem",lineHeight:"2.5rem"}}),g=a.ZP.h2.withConfig({displayName:"crypto-learning__Subheading",componentId:"sc-b5t1gs-2"})({marginLeft:"2rem",marginRight:"2rem",marginTop:"1rem",marginBottom:"1rem",maxWidth:"20rem",textAlign:"center",fontSize:"1.025rem",fontWeight:"400","--tw-text-opacity":"1",color:"rgb(128 126 152 / var(--tw-text-opacity))","@media (min-width: 768px)":{maxWidth:"none"}}),d=!0;t.default=(0,o.in)(function(e){var t=e.articlePreviewsByLocale,n=e.articleTagsByLocale,a=e.stringGetter,o=e.selectedLocaleKey,d=e.isPreview,p=t[o]||Object.values(t)[0],f=n[o]||Object.values(n)[0];return s(i.Fragment,null,s(r.PB,{title:"".concat(a({key:"SEO_CRYPTO_LEARNING_TITLE"})," | ").concat(a({key:"SITE_NAME"})),description:"".concat(a({key:"SEO_CRYPTO_LEARNING_DESCRIPTION"})),canonical:"https://dydx.exchange/crypto-learning"}),s(l.Z,{isPreview:d},s(m,null,s(u,null,a({key:"DYDX_ACADEMY"})),s(g,null,a({key:"LEARNING_CENTER_DESCRIPTION"})),s(c.z,{cmsPostPreviews:p,cmsPostTags:f,emptyStateMessage:a({key:"ARTICLES_NOT_FOUND"}),additionalLinks:[{href:"/crypto-learning/glossary",name:a({key:"GLOSSARY"})}],locale:o,location:"crypto-learning",stringGetter:a}))))})},3264:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/crypto-learning",function(){return n(585)}])}},function(e){e.O(0,[681,238,61,888,774,179],function(){return e(e.s=3264)}),_N_E=e.O()}]);