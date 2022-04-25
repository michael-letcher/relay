(self.webpackChunk=self.webpackChunk||[]).push([[94653],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>s});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){return function(n){var t=d(n.components);return r.createElement(e,i({},n,{components:t}))}},d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(t),m=o,p=s["".concat(a,".").concat(m)]||s[m]||v[m]||i;return t?r.createElement(p,c(c({ref:n},u),{},{components:t})):r.createElement(p,c({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},36742:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>v});var r=t(79973),o=t(67294),i=t(73727),a=t(52263),c=t(13919),l=t(10412),u=(0,o.createContext)({collectLink:function(){}}),s=t(44996),d=t(18780),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const v=function(e){var n,t,v=e.isNavLink,p=e.to,f=e.href,h=e.activeClassName,y=e.isActive,g=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,E=(0,r.Z)(e,m),k=(0,a.default)().siteConfig,x=k.trailingSlash,O=k.baseUrl,R=(0,s.useBaseUrlUtils)().withBaseUrl,P=(0,o.useContext)(u),C=p||f,j=(0,c.Z)(C),N=null==C?void 0:C.replace("pathname://",""),U=void 0!==N?(t=N,w&&function(e){return e.startsWith("/")}(t)?R(t):t):void 0;U&&j&&(U=(0,d.applyTrailingSlash)(U,{trailingSlash:x,baseUrl:O}));var A=(0,o.useRef)(!1),T=v?i.OL:i.rU,D=l.default.canUseIntersectionObserver,M=(0,o.useRef)();(0,o.useEffect)((function(){return!D&&j&&null!=U&&window.docusaurus.prefetch(U),function(){D&&M.current&&M.current.disconnect()}}),[M,U,D,j]);var _=null!==(n=null==U?void 0:U.startsWith("#"))&&void 0!==n&&n,S=!U||!j||_;return U&&j&&!_&&!g&&P.collectLink(U),S?o.createElement("a",Object.assign({href:U},C&&!j&&{target:"_blank",rel:"noopener noreferrer"},E)):o.createElement(T,Object.assign({},E,{onMouseEnter:function(){A.current||null==U||(window.docusaurus.preload(U),A.current=!0)},innerRef:function(e){var n,t;D&&e&&j&&(n=e,t=function(){null!=U&&window.docusaurus.prefetch(U)},M.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(n),M.current.disconnect(),t())}))})),M.current.observe(n))},to:U||""},v&&{isActive:y,activeClassName:h}))}},13919:(e,n,t)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:()=>r,Z:()=>o})},44996:(e,n,t)=>{"use strict";t.r(n),t.d(n,{useBaseUrlUtils:()=>i,default:()=>a});var r=t(52263),o=t(13919);function i(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,l=i.absolute,u=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(c)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+s:s}(i,t,e,n)}}}function a(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},8802:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var o,i=e.split(/[#?]/)[0],a="/"===i||i===r?i:(o=i,t?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(i,a)}},18780:function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var o=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=t(29964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(i).default}})},29964:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},68629:(e,n,t)=>{"use strict";t.d(n,{Z:()=>v});var r=t(36742),o=t(44256),i=t(67294);function a(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function c(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var l=function(){var e=i.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},u=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:a},"Filing a task"))},s=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return i.createElement(c,null,i.createElement(u,null),i.createElement(l,null),i.createElement(s,null))},m=function(){return i.createElement(c,null,i.createElement(l,null),i.createElement(s,null))};const v=function(){return(0,o.fbContent)({internal:i.createElement(d,null),external:i.createElement(m,null)})}},71872:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>u,metadata:()=>s,toc:()=>d,default:()=>h});var r=t(74034),o=t(79973),i=(t(67294),t(3905)),a=t(68629),c=(t(44256),["components"]),l={id:"environment",title:"Environment",slug:"/guided-tour/rendering/environment/",description:"Relay guide to the environment",keywords:["environment","RelayEnvironmentProvider","useRelayEnvironment"]},u=void 0,s={unversionedId:"guided-tour/rendering/environment",id:"version-v13.0.0/guided-tour/rendering/environment",isDocsHomePage:!1,title:"Environment",description:"Relay guide to the environment",source:"@site/versioned_docs/version-v13.0.0/guided-tour/rendering/environment.md",sourceDirName:"guided-tour/rendering",slug:"/guided-tour/rendering/environment/",permalink:"/docs/guided-tour/rendering/environment/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/guided-tour/rendering/environment.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Bhuwan Khattar",lastUpdatedAt:1650907478,formattedLastUpdatedAt:"4/25/2022",frontMatter:{id:"environment",title:"Environment",slug:"/guided-tour/rendering/environment/",description:"Relay guide to the environment",keywords:["environment","RelayEnvironmentProvider","useRelayEnvironment"]},sidebar:"version-v13.0.0/docs",previous:{title:"Error States with ErrorBoundaries",permalink:"/docs/guided-tour/rendering/error-states/"},next:{title:"Reusing Cached Data",permalink:"/docs/guided-tour/reusing-cached-data/"}},d=[{value:"Relay Environment Provider",id:"relay-environment-provider",children:[],level:2},{value:"Accessing the Relay Environment",id:"accessing-the-relay-environment",children:[],level:2}],m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",n)}},v=m("FbEnvironmentSetup"),p=m("FbActorsAndEnvironments"),f={toc:d};function h(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.mdx)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"relay-environment-provider"},"Relay Environment Provider"),(0,i.mdx)("p",null,"In order to render Relay components, you need to render a ",(0,i.mdx)("inlineCode",{parentName:"p"},"RelayEnvironmentProvider")," component at the root of the app:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"// App root\n\nconst {RelayEnvironmentProvider} = require('react-relay');\nconst Environment = require('MyEnvironment');\n\nfunction Root() {\n  return (\n    <RelayEnvironmentProvider environment={Environment}>\n      {/*... */}\n    </RelayEnvironmentProvider>\n  );\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("inlineCode",{parentName:"li"},"RelayEnvironmentProvider")," takes an environment, which it will make available to all descendant Relay components, and which is necessary for Relay to function.")),(0,i.mdx)(v,{mdxType:"FbEnvironmentSetup"}),(0,i.mdx)("h2",{id:"accessing-the-relay-environment"},"Accessing the Relay Environment"),(0,i.mdx)("p",null,"If you want to access the ",(0,i.mdx)("em",{parentName:"p"},"current")," Relay Environment within a descendant of a ",(0,i.mdx)("inlineCode",{parentName:"p"},"RelayEnvironmentProvider")," component, you can use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"useRelayEnvironment")," Hook:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const {useRelayEnvironment} = require('react-relay');\n\nfunction UserComponent(props: Props) {\n  const environment = useRelayEnvironment();\n\n  return (...);\n}\n")),(0,i.mdx)(p,{mdxType:"FbActorsAndEnvironments"}),(0,i.mdx)(a.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);