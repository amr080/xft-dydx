"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84],{4689:function(t,e,n){n.d(e,{x:function(){return d}});var r=n(6864),i=n(4730),o=n(7294),a=n(4141),l=n(3990),s=["href"],c=o.createElement,m=(0,a.ZP)(l.AHc).withConfig({displayName:"BackButton__ArrowLeft",componentId:"sc-1fj9dnq-0"})(["width:16px;height:16px;"]),d=function(t){var e=t.href,n=(0,i.Z)(t,s);return c(g,(0,r.Z)({href:e},n),c(m,null))},g=(0,a.ZP)("a").withConfig({displayName:"BackButton___StyledA",componentId:"sc-1fj9dnq-1"})({marginRight:"1rem",marginTop:"0.25rem",display:"inline-block",alignItems:"center",justifyContent:"center",borderRadius:"1.5rem","--tw-bg-opacity":"1",backgroundColor:"rgb(40 40 59 / var(--tw-bg-opacity))",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",textAlign:"center",fontWeight:"500","--tw-text-opacity":"1",color:"rgb(128 126 152 / var(--tw-text-opacity))",opacity:"0.5",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":hover":{opacity:"1"}})},2147:function(t,e,n){n.d(e,{n:function(){return h}});var r=n(9499),i=n(7812),o=n(7294),a=n(4141),l=n(4129),s=n(6437),c=n(3278),m=n(3199),d=n(880),g=n(3552),u=o.createElement,p=function(t,e,n){var o,a,c,d,p=n.withSuggestedUtmString,f=Object.fromEntries((0,i.Z)(e.assets.block).map(function(t){return[t.sys.id,t]})),h=Object.fromEntries([].concat((0,i.Z)(null!==(o=e.entries.block)&&void 0!==o?o:[]),(0,i.Z)(null!==(a=e.entries.hyperlink)&&void 0!==a?a:[]),(0,i.Z)(null!==(c=e.entries.inline)&&void 0!==c?c:[])).map(function(t){return[t.sys.id,t]}));return(0,l.h)(t,{renderNode:(d={},(0,r.Z)(d,s.BLOCKS.EMBEDDED_ASSET,function(t,e){t.nodeType;var n=t.data;t.content;var r=f[n.target.sys.id];return u("figure",null,u("img",{title:r.title,src:r.url,width:r.width,height:r.height}))}),(0,r.Z)(d,s.BLOCKS.EMBEDDED_ENTRY,function(t,e){t.nodeType;var n=t.data;t.content;var r=h[n.target.sys.id];return"Table"===r.__typename?u("table",null,r.data.tableData.map(function(t,e){return 0===e?u("thead",null,u("tr",null,t.map(function(t){return u("th",null,t)}))):u("tr",null,t.map(function(t,e){return u("td",null,t)}))})):"VideoEmbed"===r.__typename&&r.videoId?u("iframe",{src:"https://www.youtube-nocookie.com/embed/".concat(r.videoId.match(/[a-z0-9_-]{11}$/i)),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):null}),(0,r.Z)(d,s.INLINES.EMBEDDED_ENTRY,function(t,e){t.nodeType;var n=t.data;t.content;var r=h[n.target.sys.id];return"Button"===r.__typename?u("a",{href:r.link},u("button",{className:r.isPrimary?"isPrimary":"isSecondary"},r.text)):null}),(0,r.Z)(d,s.INLINES.ENTRY_HYPERLINK,function(t,e){t.nodeType;var n=t.data;t.content;var r=h[n.target.sys.id];return u("a",{href:(0,m.H)(r)},e)}),(0,r.Z)(d,s.INLINES.HYPERLINK,function(t,e){t.nodeType;var n,r,i,o,a=t.data;t.content;var l=null==a?void 0:a.uri;return(null!==(n=l)&&void 0!==n&&n.includes("v4.testnet.dydx.exchange")||null!==(r=l)&&void 0!==r&&r.includes(g.L7.TRADE)||null!==(i=l)&&void 0!==i&&i.includes(g.L7.TRADE_V3)||null!==(o=l)&&void 0!==o&&o.includes(g.L7.TRADE_V3_STAGING))&&(l=p(l)),u("a",{href:l,target:"_blank"},e)}),d),renderText:function(t){var e=/[$]([A-Za-z]+|[0-9][A-Za-z]{2,})/g;return e.test(t)?u("span",{dangerouslySetInnerHTML:{__html:t.replace(e,function(t,e){return'\n                  <abbr\n                    class="token"\n                    title="$'.concat(e,'"\n                    ','style="--icon: url('.concat("https://v4.testnet.dydx.exchange","/currencies/").concat(e.toLowerCase(),'.png)"'),'\n                  ><span class="invisible">$</span>').concat(e,"</abbr>\n                ")})}}):t}})},f=a.ZP.div.withConfig({displayName:"CmsPostContent__StyledCmsPostContent",componentId:"sc-tqjifz-0"})([""," color:rgba(200,199,216,1);* ::selection{background-color:rgba(105,102,255,0.75);color:#fff;}> p,blockquote,ol,ul{margin-top:1.5rem;margin-bottom:1.5rem;}li,p{font-weight:300;font-size:16px;letter-spacing:-0.016rem;}li{line-height:150%;margin-bottom:8px;list-style-type:inherit;}ul{list-style-type:square;margin-top:10px;margin-bottom:10px;margin-left:1rem;}ol{list-style-type:decimal;margin-top:10px;margin-bottom:10px;margin-left:2.5ch;}iframe{width:100%;aspect-ratio:16 / 9;margin-top:2rem;margin-bottom:3rem;}table{width:100%;}th{padding-right:1.5rem;padding-bottom:0.4rem;min-width:10%;text-align:left;}th:last-child{padding-right:0;}td{padding-top:0.3rem;padding-bottom:0.3rem;padding-right:1.5rem;font-family:Courier,monospace;font-size:14px;font-feature-settings:'zero' 1;}td:last-child{padding-right:0;}ul ul{margin-left:-1rem;padding-left:1rem;border-left:2px solid #28283b;}ul ul > li{margin-top:0.5rem;list-style:none;}b,strong{color:rgba(250,250,253,1);font-weight:500;}h2{font-size:1.5rem;line-height:2rem;line-height:1.375;margin-bottom:0.75rem;margin-top:3rem;}h2,h3,h4,h5,h6{font-weight:500;color:rgba(250,250,253,1);}h3{font-size:1.25rem;line-height:1.75rem;line-height:1.375;margin-bottom:0;margin-top:2rem;}h4{font-weight:500;font-size:1.025rem;margin-bottom:1rem;margin-top:2rem;}a,a > b{color:#6966ff;transition:all 0.2s ease-in-out;}a:hover{filter:brightness(150%);}button > a{color:#fff;}button > a:hover{filter:none;}blockquote{margin-top:3rem;border-left:2px solid #6966ff;padding-left:16px;font-size:1.4rem;}blockquote > p{color:#fff;}hr{margin-top:4rem;margin-bottom:4rem;border-top:1px solid #232334;}strong{font-weight:500;}pre{overflow-x:auto;width:0;min-width:100%;}abbr[title]{display:inline-block;height:1em;letter-spacing:0.03rem;margin-top:0.5px;font-size:0.8125em;font-weight:500;color:white;text-decoration:none;white-space:nowrap;}abbr[title]::before{content:'';display:inline-block;background:center / contain no-repeat;vertical-align:-0.4em;background-image:var(--icon);width:1.6153846154em;height:1.6153846154em;margin-right:4px;}abbr[title='$DYDX'],abbr[title='$stkDYDX']{--icon:url(/tokens/dydx.svg);}abbr[title='$USDC']{--icon:url(/tokens/usdc.svg);}.invisible{font-size:0;}",""],function(t){return t.withInternalSpacing&&{marginLeft:"auto",marginRight:"auto",width:"100%",maxWidth:"100%",paddingLeft:"1.5rem",paddingRight:"1.5rem","@media (min-width: 640px)":{maxWidth:"100%"},"@media (min-width: 768px)":{maxWidth:"48rem"},"@media (min-width: 1024px)":{maxWidth:"48rem"}}},c.Df),h=function(t){var e=t.cmsPost,n=t.cmsPostContent,r=t.withInternalSpacing,i=(0,d.Y)().withSuggestedUtmString;return u(f,{withInternalSpacing:void 0===r||r},p(n.json,n.links,{cmsPost:e,withSuggestedUtmString:i}))}},1370:function(t,e,n){n.d(e,{y:function(){return s}});var r=n(7294),i=n(4141),o=r.createElement,a=i.ZP.div.withConfig({displayName:"CoverImage__ImageContainer",componentId:"sc-1tnziqn-0"})(["",""],{marginBottom:"1rem",maxWidth:"64rem"}),l=i.ZP.img.withConfig({displayName:"CoverImage__Image",componentId:"sc-1tnziqn-1"})(["user-drag:none !important;"]),s=function(t){var e=t.title,n=t.src,r=t.height,i=t.width;return o(a,{className:t.className},o(l,{src:n,alt:"".concat(e),width:i,height:r}))}},3007:function(t,e,n){n.d(e,{i:function(){return p}});var r=n(6835),i=n(7812),o=n(7294),a=n(4141),l=n(2147),s=n(1370),c=n(3199),m=o.createElement;function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var g=function(t){var e=t.name,n=t.locale;return(Intl.Segmenter?(0,i.Z)(new Intl.Segmenter(n,{granularity:"grapheme"}).segment(e))[0].segment:e[0]).toLocaleUpperCase()},u=function(t){var e,n=t.glossaryTerm;return m(y,{id:"".concat(n.slug)},m(b,null,m("a",{role:"glossary-heading",href:"#".concat(n.slug)},n.name)),m(l.n,{cmsPostContent:n.definition}),null!==(e=n.referencesCollection)&&void 0!==e&&e.items.length?m(v,null,n.referencesCollection.items.map(function(t){return m(w,{key:t.sys.id},m("a",{href:(0,c.H)(t)},t.coverImage&&m(x,{title:t.coverImage.title,src:"".concat(t.coverImage.url,"?w=400"),width:t.coverImage.width,height:t.coverImage.height}),m("h5",null,t.title||t.name)))})):null)},p=function(t){var e,n=t.glossaryTerms,i=t.locale,a=[],l=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}}(t))){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}(n);try{for(l.s();!(e=l.n()).done;){var s,c=e.value,p=g({name:c.name,locale:i});(null!==(s=a[p])&&void 0!==s?s:a[p]=[]).push(c)}}catch(t){l.e(t)}finally{l.f()}var y=new Intl.Collator(i,{caseFirst:"upper"}).compare,b=function(t){return isNaN(t[0])?" "+t:t},v=Object.entries(a).sort(function(t,e){return y(b(t),b(e))});return Object.values(a).forEach(function(t){return t.sort(function(t,e){return y(t.slug,e.slug)})}),m(o.Fragment,null,v.map(function(t){var e=(0,r.Z)(t,2),n=e[0],i=e[1];return m(f,{key:n,id:"".concat(n)},m(h,null,m("a",{href:"#".concat(n)},n)),i.map(function(t){return m(u,{key:t.slug,glossaryTerm:t})}))}))},f=a.ZP.section.withConfig({displayName:"GlossaryTerms__GlossarySection",componentId:"sc-xnf21z-0"})(["--section-padding:clamp(1rem,6vw,2.5rem);margin-top:2rem;max-width:95vw;padding:var(--section-padding);display:grid;grid-template-columns:auto 1fr;gap:clamp(3.5rem,0.5rem + 5vw,4rem) clamp(1rem,0.5rem + 5vw,4rem);border-radius:1.5rem;text-align:start;transition:ease-out 0.4s;&:target{backdrop-filter:blur(4px);background-color:rgba(255,255,255,0.03);}"]),h=a.ZP.h3.withConfig({displayName:"GlossaryTerms__GlossarySectionHeading",componentId:"sc-xnf21z-1"})(["--font-size:clamp(2.5rem,0.5rem + 5vw,4rem);display:flex;align-items:center;font-size:var(--font-size);font-weight:900;color:",";width:1ch;height:1.875rem;line-height:1;text-align:center;position:sticky;top:calc(6.5rem + var(--section-padding));right:100%;margin-top:calc(-0.5 * var(--section-padding));padding:var(--section-padding) 0;transition:0.2s;&:before{content:'';position:absolute;inset:0;transition:0.2s;pointer-events:none;box-shadow:0 0 transparent,0 0 inset transparent;}:hover{color:",";&:before{color:",";box-shadow:0 0.025em,0 -0.025em inset;}}"],"#807E98","#C8C7D8","#C8C7D8"),y=a.ZP.article.withConfig({displayName:"GlossaryTerms__GlossaryTermContainer",componentId:"sc-xnf21z-2"})(["grid-column:2;scroll-margin-block-start:1.5rem;margin:-1.25rem -1.5rem;padding:1.25rem 1.5rem;max-width:48rem;border-radius:1rem;transition:ease-out 0.4s;backdrop-filter:blur(0px);&:target{backdrop-filter:blur(4px);background-color:rgba(255,255,255,0.03);}> div{margin:0;padding:0;> :empty{display:none;}:last-child{margin-bottom:0.25rem;}}"]),b=a.ZP.h4.withConfig({displayName:"GlossaryTerms__GlossaryTermHeading",componentId:"sc-xnf21z-3"})(["font-size:1.5rem;font-weight:500;color:",";width:max-content;line-height:1.25;transition:0.2s;:hover{color:",";box-shadow:0 -0.05em inset;}"],"#C8C7D8","#FAFAFD"),v=a.ZP.aside.withConfig({displayName:"GlossaryTerms__References",componentId:"sc-xnf21z-4"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(min(12rem,100%),auto));align-items:start;justify-content:start;padding:1.5rem;gap:2rem;border-radius:0.5rem;backdrop-filter:blur(4px);background-color:rgba(0,0,0,0.1);@media (max-width:50rem){justify-content:center;}"]),w=a.ZP.article.withConfig({displayName:"GlossaryTerms__Reference",componentId:"sc-xnf21z-5"})(["display:grid;width:100%;max-width:12.65rem;transition:0.3s;&:hover{scale:1.015;}a{display:grid;gap:0.75rem;font-size:1.2rem;font-weight:500;transition:all 0.2s ease-in-out;&:hover{filter:brightness(150%);}h5{font-size:0.875rem;color:",";}}"],"#C8C7D8"),x=(0,a.ZP)(s.y).withConfig({displayName:"GlossaryTerms__ReferenceImage",componentId:"sc-xnf21z-6"})(["margin:0;display:grid;img{height:100%;width:auto;}"])},3199:function(t,e,n){n.d(e,{H:function(){return i}});var r=n(9499),i=function(t){var e,n;return null!==(e=(n={},(0,r.Z)(n,"LegalDocument","/".concat(t.slug)),(0,r.Z)(n,"BlogPost","/blog/".concat(t.slug)),(0,r.Z)(n,"Article","/crypto-learning/".concat(t.slug)),(0,r.Z)(n,"GlossaryTerm","/crypto-learning#glossary/".concat(t.slug)),n)[t.__typename])&&void 0!==e?e:""}}}]);