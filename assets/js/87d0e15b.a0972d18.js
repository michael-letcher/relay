(self.webpackChunk=self.webpackChunk||[]).push([[19306],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>s,withMDXComponents:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){return function(t){var n=s(t.components);return a.createElement(e,o({},t,{components:n}))}},s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36742:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var a=n(79973),r=n(67294),o=n(73727),i=n(52263),l=n(13919),c=n(10412),d=(0,r.createContext)({collectLink:function(){}}),u=n(44996),s=n(18780),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const p=function(e){var t,n,p=e.isNavLink,f=e.to,h=e.href,v=e.activeClassName,y=e.isActive,g=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,b=void 0===w||w,x=(0,a.Z)(e,m),C=(0,i.default)().siteConfig,k=C.trailingSlash,N=C.baseUrl,O=(0,u.useBaseUrlUtils)().withBaseUrl,E=(0,r.useContext)(d),D=f||h,U=(0,l.Z)(D),P=null==D?void 0:D.replace("pathname://",""),R=void 0!==P?(n=P,b&&function(e){return e.startsWith("/")}(n)?O(n):n):void 0;R&&U&&(R=(0,s.applyTrailingSlash)(R,{trailingSlash:k,baseUrl:N}));var j=(0,r.useRef)(!1),L=p?o.OL:o.rU,T=c.default.canUseIntersectionObserver,_=(0,r.useRef)();(0,r.useEffect)((function(){return!T&&U&&null!=R&&window.docusaurus.prefetch(R),function(){T&&_.current&&_.current.disconnect()}}),[_,R,T,U]);var S=null!==(t=null==R?void 0:R.startsWith("#"))&&void 0!==t&&t,q=!R||!U||S;return R&&U&&!S&&!g&&E.collectLink(R),q?r.createElement("a",Object.assign({href:R},D&&!U&&{target:"_blank",rel:"noopener noreferrer"},x)):r.createElement(L,Object.assign({},x,{onMouseEnter:function(){j.current||null==R||(window.docusaurus.preload(R),j.current=!0)},innerRef:function(e){var t,n;T&&e&&U&&(t=e,n=function(){null!=R&&window.docusaurus.prefetch(R)},_.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.current.unobserve(t),_.current.disconnect(),n())}))})),_.current.observe(t))},to:R||""},p&&{isActive:y,activeClassName:v}))}},13919:(e,t,n)=>{"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>r})},44996:(e,t,n)=>{"use strict";n.r(t),n.d(t,{useBaseUrlUtils:()=>o,default:()=>i});var a=n(52263),r=n(13919);function o(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,l=void 0!==i&&i,c=o.absolute,d=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,o=e.split(/[#?]/)[0],i="/"===o||o===a?o:(r=o,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(o,i)}},18780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var o=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(o).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(36742),r=n(44256),o=n(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var c=function(){var e=o.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},d=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},u=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},s=function(){return o.createElement(l,null,o.createElement(d,null),o.createElement(c,null),o.createElement(u,null))},m=function(){return o.createElement(l,null,o.createElement(c,null),o.createElement(u,null))};const p=function(){return(0,r.fbContent)({internal:o.createElement(s,null),external:o.createElement(m,null)})}},64443:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>d,contentTitle:()=>u,metadata:()=>s,toc:()=>m,default:()=>h});var a,r=n(74034),o=n(79973),i=(n(67294),n(3905)),l=n(68629),c=(n(44256),["components"]),d={id:"local-data-updates",title:"Local Data Updates",slug:"/guided-tour/updating-data/local-data-updates/",description:"Relay guide to local data updates",keywords:["client-only","commitLocalUpdate","commitPayload"]},u=void 0,s={unversionedId:"guided-tour/updating-data/local-data-updates",id:"version-v12.0.0/guided-tour/updating-data/local-data-updates",isDocsHomePage:!1,title:"Local Data Updates",description:"Relay guide to local data updates",source:"@site/versioned_docs/version-v12.0.0/guided-tour/updating-data/local-data-updates.md",sourceDirName:"guided-tour/updating-data",slug:"/guided-tour/updating-data/local-data-updates/",permalink:"/docs/v12.0.0/guided-tour/updating-data/local-data-updates/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/guided-tour/updating-data/local-data-updates.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Bhuwan Khattar",lastUpdatedAt:1650907478,formattedLastUpdatedAt:"4/25/2022",frontMatter:{id:"local-data-updates",title:"Local Data Updates",slug:"/guided-tour/updating-data/local-data-updates/",description:"Relay guide to local data updates",keywords:["client-only","commitLocalUpdate","commitPayload"]},sidebar:"version-v12.0.0/docs",previous:{title:"GraphQL Subscriptions",permalink:"/docs/v12.0.0/guided-tour/updating-data/graphql-subscriptions/"},next:{title:"Client-Only Data",permalink:"/docs/v12.0.0/guided-tour/updating-data/client-only-data/"}},m=[{value:"commitLocalUpdate",id:"commitlocalupdate",children:[],level:2},{value:"commitPayload",id:"commitpayload",children:[],level:2}],p=(a="FbLocalDataUpdatesFlow",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),f={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.mdx)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"There are a couple of APIs that Relay provides in order to make purely local updates to the Relay store (i.e. updates not tied to a server operation)."),(0,i.mdx)("p",null,"Note that local data updates can be made both on ",(0,i.mdx)("a",{parentName:"p",href:"../client-only-data/"},"client-only data"),", or on regular data that was fetched from the server via an operation."),(0,i.mdx)("h2",{id:"commitlocalupdate"},"commitLocalUpdate"),(0,i.mdx)("p",null,"To make updates using an ",(0,i.mdx)("a",{parentName:"p",href:"../graphql-mutations/#updater-functions"},(0,i.mdx)("inlineCode",{parentName:"a"},"updater"))," function, you can use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"commitLocalUpdate")," API:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {Environment} from 'react-relay';\n\nconst {commitLocalUpdate, graphql} = require('react-relay');\n\nfunction commitCommentCreateLocally(\n  environment: Environment,\n  feedbackID: string,\n) {\n  return commitLocalUpdate(environment, store => {\n    const feedbackRecord = store.get(feedbackID);\n    const connectionRecord = ConnectionHandler.getConnection(\n      userRecord,\n      'CommentsComponent_comments_connection',\n    );\n\n    // Create a new local Comment from scratch\n    const id = `client:new_comment:${randomID()}`;\n    const newCommentRecord = store.create(id, 'Comment');\n\n    // ... update new comment with content\n\n    // Create new edge from scratch\n    const newEdge = ConnectionHandler.createEdge(\n      store,\n      connectionRecord,\n      newCommentRecord,\n      'CommentEdge' /* GraphQl Type for edge */,\n    );\n\n    // Add edge to the end of the connection\n    ConnectionHandler.insertEdgeAfter(connectionRecord, newEdge);\n  });\n}\n\nmodule.exports = {commit: commitCommentCreateLocally};\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"commitLocalUpdate")," update simply takes an environment and an updater function.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"updater")," takes a ",(0,i.mdx)("em",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"em"},"store"))," argument, which is an instance of a ",(0,i.mdx)("a",{parentName:"li",href:"../../../api-reference/store/"},(0,i.mdx)("inlineCode",{parentName:"a"},"RecordSourceSelectorProxy")),";  this interface allows you to ",(0,i.mdx)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store: you can ",(0,i.mdx)("em",{parentName:"li"},"create entirely new records"),", or ",(0,i.mdx)("em",{parentName:"li"},"update or delete existing ones"),"."))),(0,i.mdx)("li",{parentName:"ul"},"In our specific example, we're adding a new comment to our local store when. Specifically, we're adding a new item to a connection; for more details on the specifics of how that works, check out our ",(0,i.mdx)("a",{parentName:"li",href:"../../list-data/updating-connections/"},"Updating Connections")," section."),(0,i.mdx)("li",{parentName:"ul"},"Note that any local data updates will automatically cause components subscribed to the data to be notified of the change and re-render.")),(0,i.mdx)("h2",{id:"commitpayload"},"commitPayload"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"commitPayload")," takes an ",(0,i.mdx)("inlineCode",{parentName:"p"},"OperationDescriptor")," and the payload for the query, and writes it to the Relay Store. The payload will be resolved like a normal server response for a query, and will also resolve Data Driven Dependencies that are passed as ",(0,i.mdx)("inlineCode",{parentName:"p"},"JSResource"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"requireDefer"),", etc."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FooQueryRawResponse} from 'FooQuery.graphql'\n\nconst {createOperationDescriptor} = require('relay-runtime');\n\nconst operationDescriptor = createOperationDescriptor(FooQuery, {\n  id: 'an-id',\n  otherVariable: 'value',\n});\n\nconst payload: FooQueryRawResponse = {...};\n\nenvironment.commitPayload(operation, payload);\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"An ",(0,i.mdx)("inlineCode",{parentName:"li"},"OperationDescriptor")," can be created by ",(0,i.mdx)("inlineCode",{parentName:"li"},"createOperationDescriptor"),"; it takes the query and the query variables."),(0,i.mdx)("li",{parentName:"ul"},"The payload can be typed using the Flow type generated by adding  ",(0,i.mdx)("inlineCode",{parentName:"li"},"@raw_response_type")," to the query."),(0,i.mdx)("li",{parentName:"ul"},"Note that any local data updates will automatically cause components subscribed to the data to be notified of the change and re-render.")),(0,i.mdx)(p,{mdxType:"FbLocalDataUpdatesFlow"}),(0,i.mdx)(l.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);