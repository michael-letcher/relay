(self.webpackChunk=self.webpackChunk||[]).push([[56454],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},68629:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(44256),r=a(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var o=function(){var e=r.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},d=function(){return r.createElement(l,null,r.createElement(s,null),r.createElement(o,null))},c=function(){return r.createElement(l,null,r.createElement(o,null))};const u=function(){return(0,n.fbContent)({internal:r.createElement(d,null),external:r.createElement(c,null)})}},60865:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>d,metadata:()=>c,toc:()=>u,default:()=>m});var n,r=a(22122),i=a(19756),l=(a(67294),a(3905)),o=a(68629),s=(a(44256),["components"]),d={id:"staleness-of-data",title:"Staleness of Data",slug:"/guided-tour/reusing-cached-data/staleness-of-data/"},c={unversionedId:"guided-tour/reusing-cached-data/staleness-of-data",id:"version-v11.0.0/guided-tour/reusing-cached-data/staleness-of-data",isDocsHomePage:!1,title:"Staleness of Data",description:"Assuming our data is present in the store, we still need to consider the staleness of such data.",source:"@site/versioned_docs/version-v11.0.0/guided-tour/reusing-cached-data/staleness-of-data.md",sourceDirName:"guided-tour/reusing-cached-data",slug:"/guided-tour/reusing-cached-data/staleness-of-data/",permalink:"/docs/guided-tour/reusing-cached-data/staleness-of-data/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/guided-tour/reusing-cached-data/staleness-of-data.md",version:"v11.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1626204936,formattedLastUpdatedAt:"7/13/2021",frontMatter:{id:"staleness-of-data",title:"Staleness of Data",slug:"/guided-tour/reusing-cached-data/staleness-of-data/"},sidebar:"version-v11.0.0/docs",previous:{title:"Presence of Data",permalink:"/docs/guided-tour/reusing-cached-data/presence-of-data/"},next:{title:"Rendering Partially Cached Data",permalink:"/docs/guided-tour/reusing-cached-data/rendering-partially-cached-data/"}},u=[{value:"Globally Invalidating the Relay Store",id:"globally-invalidating-the-relay-store",children:[]},{value:"Invalidating Specific Data In The Store",id:"invalidating-specific-data-in-the-store",children:[]},{value:"Subscribing to Data Invalidation",id:"subscribing-to-data-invalidation",children:[]},{value:"Query Cache Expiration Time",id:"query-cache-expiration-time",children:[]}],p=(n="FbPushViews",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),h={toc:u};function m(e){var t=e.components,a=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Assuming our data is ",(0,l.kt)("a",{parentName:"p",href:"../presence-of-data/"},"present in the store"),", we still need to consider the staleness of such data."),(0,l.kt)("p",null,"By default, Relay will not consider data in the store to be stale (regardless of how long it has been cached for), unless it's explicitly marked as stale using our data invalidation apis or if it is older than the query cache expiration time."),(0,l.kt)("p",null,"Marking data as stale is useful for cases when we explicitly know that some data is no longer fresh (for example after executing a ",(0,l.kt)("a",{parentName:"p",href:"../../updating-data/graphql-mutations/"},"Mutation"),"."),(0,l.kt)("p",null,"Relay exposes the following APIs to mark data as stale within an update to the store:"),(0,l.kt)("h2",{id:"globally-invalidating-the-relay-store"},"Globally Invalidating the Relay Store"),(0,l.kt)("p",null,"The coarsest type of data invalidation we can perform is invalidating the ",(0,l.kt)("em",{parentName:"p"},"whole")," store, meaning that all currently cached data will be considered stale after invalidation."),(0,l.kt)("p",null,"To invalidate the store, we can call ",(0,l.kt)("inlineCode",{parentName:"p"},"invalidateStore()")," within an ",(0,l.kt)("a",{parentName:"p",href:"../../updating-data/graphql-mutations/"},"updater")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function updater(store) {\n  store.invalidateStore();\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Calling ",(0,l.kt)("inlineCode",{parentName:"li"},"invalidateStore()")," will cause ",(0,l.kt)("em",{parentName:"li"},"all")," data that was written to the store before invalidation occurred to be considered stale, and will require any query to be refetched again the next time it's evaluated."),(0,l.kt)("li",{parentName:"ul"},"Note that an updater function can be specified as part of a ",(0,l.kt)("a",{parentName:"li",href:"../../updating-data/graphql-mutations/"},"mutation"),", ",(0,l.kt)("a",{parentName:"li",href:"../../updating-data/graphql-subscriptions/"},"subscription")," or just a ",(0,l.kt)("a",{parentName:"li",href:"../../updating-data/local-data-updates/"},"local store update"),".")),(0,l.kt)("h2",{id:"invalidating-specific-data-in-the-store"},"Invalidating Specific Data In The Store"),(0,l.kt)("p",null,"We can also be more granular about which data we invalidate and only invalidate ",(0,l.kt)("em",{parentName:"p"},"specific records")," in the store; compared to global invalidation, only queries that reference the invalidated records will be considered stale after invalidation."),(0,l.kt)("p",null,"To invalidate a record, we can call ",(0,l.kt)("inlineCode",{parentName:"p"},"invalidateRecord()")," within an ",(0,l.kt)("a",{parentName:"p",href:"../../updating-data/graphql-mutations/"},"updater")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function updater(store) {\n  const user = store.get('<id>');\n  if (user != null) {\n    user.invalidateRecord();\n  }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Calling ",(0,l.kt)("inlineCode",{parentName:"li"},"invalidateRecord()")," on the ",(0,l.kt)("inlineCode",{parentName:"li"},"user")," record will mark ",(0,l.kt)("em",{parentName:"li"},"that")," specific user in the store as stale. That means that any query that is cached and references that invalidated user will now be considered stale, and will require to be refetched again the next time it's evaluated."),(0,l.kt)("li",{parentName:"ul"},"Note that an updater function can be specified as part of a ",(0,l.kt)("a",{parentName:"li",href:"../../updating-data/graphql-mutations/"},"mutation"),", ",(0,l.kt)("a",{parentName:"li",href:"../../updating-data/graphql-subscriptions/"},"subscription")," or just a ",(0,l.kt)("a",{parentName:"li",href:"../../updating-data/local-data-updates/"},"local store update"),".")),(0,l.kt)("h2",{id:"subscribing-to-data-invalidation"},"Subscribing to Data Invalidation"),(0,l.kt)("p",null,"Just marking the store or records as stale will cause queries to be refetched they next time they are evaluated; so for example, the next time you navigate back to a page that renders a stale query, the query will be refetched even if the data is cached, since the query references stale data."),(0,l.kt)("p",null,"This is useful for a lot of use cases, but there are some times when we'd like to immediately refetch some data upon invalidation, for example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When invalidating data that is already visible in the current page. Since no navigation is occurring, we won't re-evaluate the queries for the current page, so even if some data is stale, it won't be immediately refetched and we will be showing stale data."),(0,l.kt)("li",{parentName:"ul"},"When invalidating data that is rendered on a previous view that was never unmounted; since the view wasn't unmounted, if we navigate back, the queries for that view won't be re-evaluated, meaning that even if some is stale, it won't be refetched and we will be showing stale data.")),(0,l.kt)(p,{mdxType:"FbPushViews"}),(0,l.kt)("p",null,"To support these use cases, Relay exposes the ",(0,l.kt)("inlineCode",{parentName:"p"},"useSubscribeToInvalidationState")," hook:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function ProfilePage(props) {\n  // Example of querying data for the current page for a given user\n  const data = usePreloadedQuery(\n    graphql`...`,\n    props.preloadedQuery,\n  )\n\n  // Here we subscribe to changes in invalidation state for the given user ID.\n  // Whenever the user with that ID is marked as stale, the provided callback will\n  // be executed\n  useSubscribeToInvalidationState([props.userID], () => {\n    // Here we can do things like:\n    // - re-evaluate the query by passing a new preloadedQuery to usePreloadedQuery.\n    // - imperatively refetch any data\n    // - render a loading spinner or gray out the page to indicate that refetch\n    //   is happening.\n  })\n\n  return (...);\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useSubscribeToInvalidationState")," takes an array of ids, and a callback. Whenever any of the records for those ids are marked as stale, the provided callback will fire."),(0,l.kt)("li",{parentName:"ul"},"Inside the callback, we can react accordingly and refetch and/or update any current views that are rendering stale data. As an example, we could re-execute the top-level ",(0,l.kt)("inlineCode",{parentName:"li"},"usePreloadedQuery")," by keeping the ",(0,l.kt)("inlineCode",{parentName:"li"},"preloadedQuery")," in state and setting a new one here; since that query is stale at that point, the query will be refetched even if the data is cached in the store.")),(0,l.kt)("h2",{id:"query-cache-expiration-time"},"Query Cache Expiration Time"),(0,l.kt)("p",null,"In addition, the query cache expiration time affects whether certain operations (i.e. a query and variables) can be fulfilled with data that is already present in the store, i.e. whether the data for a query has become stale."),(0,l.kt)("p",null," A stale query is one which can be fulfilled with records from the store, and"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"it was last fetched more than the query cache expiration time ago, or"),(0,l.kt)("li",{parentName:"ul"},"for which at least one referenced record was invalidated.")),(0,l.kt)("p",null,"This staleness check occurs when a new request is made (e.g. in a call to ",(0,l.kt)("inlineCode",{parentName:"p"},"loadQuery"),"). Components which reference stale data will continue to be able to render that data; however, any additional requests which would be fulfilled using stale data will go to the network."),(0,l.kt)("p",null,"In order to configure the query cache expiration time, we can specify the ",(0,l.kt)("inlineCode",{parentName:"p"},"queryCacheExpirationTime")," option to the Relay Store:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const store = new Store(source, {queryCacheExpirationTime: 5 * 60 * 1000 });\n")),(0,l.kt)("p",null,"If the query cache expiration time is not provided, staleness checks only look at whether the referenced records have been invalidated."),(0,l.kt)(o.Z,{mdxType:"DocsRating"}))}m.isMDXComponent=!0}}]);