"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[91327],{3905:(e,n,a)=>{a.r(n),a.d(n,{MDXContext:()=>m,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>s});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},r.apply(this,arguments)}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=t.createContext({}),s=function(e){return function(n){var a=c(n.components);return t.createElement(e,r({},n,{components:a}))}},c=function(e){var n=t.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=c(a),p=i,h=s["".concat(l,".").concat(p)]||s[p]||u[p]||r;return a?t.createElement(h,o(o({ref:n},m),{},{components:a})):t.createElement(h,o({ref:n},m))}));function f(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=a[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},68629:(e,n,a)=>{a.d(n,{Z:()=>u});var t=a(39960),i=a(86341),r=a(67294);function l(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),n)}var d=function(){var e=r.useState(!1),n=e[0],a=e[1],t=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},m=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:l},"Filing a task"))},s=function(){return r.createElement("p",null,"Help us make the site even better by"," ",r.createElement(t.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return r.createElement(o,null,r.createElement(m,null),r.createElement(d,null),r.createElement(s,null))},p=function(){return r.createElement(o,null,r.createElement(d,null),r.createElement(s,null))};const u=function(){return(0,i.fbContent)({internal:r.createElement(c,null),external:r.createElement(p,null)})}},13293:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>s,metadata:()=>p,toc:()=>h});var t,i=a(83117),r=a(80102),l=(a(67294),a(3905)),o=a(68629),d=a(86341),m=["components"],s={id:"use-pagination-fragment",title:"usePaginationFragment",slug:"/api-reference/use-pagination-fragment/",description:"API reference for usePaginationFragment, a React hook used to paginate a connection",keywords:["pagination","connection"]},c=void 0,p={unversionedId:"api-reference/hooks/use-pagination-fragment",id:"api-reference/hooks/use-pagination-fragment",title:"usePaginationFragment",description:"API reference for usePaginationFragment, a React hook used to paginate a connection",source:"@site/docs/api-reference/hooks/use-pagination-fragment.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-pagination-fragment/",permalink:"/docs/next/api-reference/use-pagination-fragment/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/api-reference/hooks/use-pagination-fragment.md",tags:[],version:"current",lastUpdatedBy:"Astrid Yu",lastUpdatedAt:1689201176,formattedLastUpdatedAt:"Jul 12, 2023",frontMatter:{id:"use-pagination-fragment",title:"usePaginationFragment",slug:"/api-reference/use-pagination-fragment/",description:"API reference for usePaginationFragment, a React hook used to paginate a connection",keywords:["pagination","connection"]},sidebar:"docs",previous:{title:"useRefetchableFragment",permalink:"/docs/next/api-reference/use-refetchable-fragment/"},next:{title:"useMutation",permalink:"/docs/next/api-reference/use-mutation/"}},u={},h=[{value:"<code>usePaginationFragment</code>",id:"usepaginationfragment",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Behavior",id:"behavior",level:3},{value:"Differences with <code>PaginationContainer</code>",id:"differences-with-paginationcontainer",level:3}],f=(t="FbUsePaginationFragmentReturnValue",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),g={toc:h};function x(e){var n=e.components,a=(0,r.Z)(e,m);return(0,l.mdx)("wrapper",(0,i.Z)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h2",{id:"usepaginationfragment"},(0,l.mdx)("inlineCode",{parentName:"h2"},"usePaginationFragment")),(0,l.mdx)("p",null,"You can use ",(0,l.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment")," to render a fragment that uses a ",(0,l.mdx)("inlineCode",{parentName:"p"},"@connection")," and paginate over it:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"import type {FriendsList_user$key} from 'FriendsList_user.graphql';\n\nconst React = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\ntype Props = {\n  user: FriendsList_user$key,\n};\n\nfunction FriendsList(props: Props) {\n  const {\n    data,\n    loadNext,\n    loadPrevious,\n    hasNext,\n    hasPrevious,\n    isLoadingNext,\n    isLoadingPrevious,\n    refetch, // For refetching connection\n  } = usePaginationFragment(\n    graphql`\n      fragment FriendsListComponent_user on User\n      @refetchable(queryName: \"FriendsListPaginationQuery\") {\n        name\n        friends(first: $count, after: $cursor)\n        @connection(key: \"FriendsList_user_friends\") {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n  return (\n    <>\n      <h1>Friends of {data.name}:</h1>\n\n      <List items={data.friends?.edges.map(edge => edge.node)}>\n        {node => {\n          return (\n            <div>\n              {node.name} - {node.age}\n            </div>\n          );\n        }}\n      </List>\n      <Button onClick={() => loadNext(10)}>Load more friends</Button>\n    </>\n  );\n}\n\nmodule.exports = FriendsList;\n")),(0,l.mdx)("h3",{id:"arguments"},"Arguments"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"fragment"),": GraphQL fragment specified using a ",(0,l.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"This fragment must have an ",(0,l.mdx)("inlineCode",{parentName:"li"},"@connection")," directive on a connection field, otherwise using it will throw an error."),(0,l.mdx)("li",{parentName:"ul"},"This fragment must have a ",(0,l.mdx)("inlineCode",{parentName:"li"},"@refetchable")," directive, otherwise using it will throw an error. The ",(0,l.mdx)("inlineCode",{parentName:"li"},"@refetchable"),' directive can only be added to fragments that are "refetchable", that is, on fragments that are declared on ',(0,l.mdx)("inlineCode",{parentName:"li"},"Viewer")," or  ",(0,l.mdx)("inlineCode",{parentName:"li"},"Query")," types, or on a type that implements ",(0,l.mdx)("inlineCode",{parentName:"li"},"Node")," (i.e. a type that has an ",(0,l.mdx)("inlineCode",{parentName:"li"},"id"),").",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Note that you ",(0,l.mdx)("em",{parentName:"li"},"do not")," need to manually specify a pagination query yourself. The ",(0,l.mdx)("inlineCode",{parentName:"li"},"@refetchable")," directive will autogenerate a query with the specified ",(0,l.mdx)("inlineCode",{parentName:"li"},"queryName"),". This will also generate Flow types for the query, available to import from the generated file: ",(0,l.mdx)("inlineCode",{parentName:"li"},"<queryName>.graphql.js"),"."))))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"fragmentReference"),": The ",(0,l.mdx)("em",{parentName:"li"},"fragment reference")," is an opaque Relay object that Relay uses to read the data for the fragment from the store; more specifically, it contains information about which particular object instance the data should be read from.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"The type of the fragment reference can be imported from the generated Flow types, from the file ",(0,l.mdx)("inlineCode",{parentName:"li"},"<fragment_name>.graphql.js"),", and can be used to declare the type of your ",(0,l.mdx)("inlineCode",{parentName:"li"},"Props"),". The name of the fragment reference type will be: ",(0,l.mdx)("inlineCode",{parentName:"li"},"<fragment_name>$key"),". We use our ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/relayjs/eslint-plugin-relay"},"lint rule")," to enforce that the type of the fragment reference prop is correctly declared.")))),(0,l.mdx)("h3",{id:"return-value"},"Return Value"),(0,l.mdx)(d.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,l.mdx)(f,{mdxType:"FbUsePaginationFragmentReturnValue"})),(0,l.mdx)(d.OssOnly,{mdxType:"OssOnly"},(0,l.mdx)("p",null,"Object containing the following properties:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"data"),": Object that contains data which has been read out from the Relay store; the object matches the shape of specified fragment.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"The Flow type for data will also match this shape, and contain types derived from the GraphQL Schema."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"isLoadingNext"),": Boolean value which indicates if a pagination request for the ",(0,l.mdx)("em",{parentName:"li"},"next")," items in the connection is currently in flight, including any incremental data payloads."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"isLoadingPrevious"),": Boolean value which indicates if a pagination request for the ",(0,l.mdx)("em",{parentName:"li"},"previous")," items in the connection is currently in flight, including any incremental data payloads."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"hasNext"),': Boolean value which indicates if the end of the connection has been reached in the "forward" direction. It will be true if there are more items to query for available in that direction, or false otherwise.'),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"hasPrevious"),': Boolean value which indicates if the end of the connection has been reached in the "backward" direction. It will be true if there are more items to query for available in that direction, or false otherwise.'),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"loadNext"),': Function used to fetch more items in the connection in the "forward" direction.',(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Arguments:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"count"),(0,l.mdx)("em",{parentName:"li"},":")," Number that indicates how many items to query for in the pagination request."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"options"),": ",(0,l.mdx)("em",{parentName:"li"},(0,l.mdx)("em",{parentName:"em"},"[Optional]"))," options object",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"onComplete"),": Function that will be called whenever the refetch request has completed, including any incremental data payloads. If an error occurs during the request, ",(0,l.mdx)("inlineCode",{parentName:"li"},"onComplete")," will be called with an ",(0,l.mdx)("inlineCode",{parentName:"li"},"Error")," object as the first parameter."))))),(0,l.mdx)("li",{parentName:"ul"},"Return Value:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"disposable"),": Object containing a ",(0,l.mdx)("inlineCode",{parentName:"li"},"dispose")," function. Calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"disposable.dispose()")," will cancel the pagination request."))),(0,l.mdx)("li",{parentName:"ul"},"Behavior:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"loadNext"),"  ",(0,l.mdx)("em",{parentName:"li"},"will not")," cause the component to suspend. Instead, the ",(0,l.mdx)("inlineCode",{parentName:"li"},"isLoadingNext")," value will be set to true while the request is in flight, and the new items from the pagination request will be added to the connection, causing the component to re-render."),(0,l.mdx)("li",{parentName:"ul"},"Pagination requests initiated from calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"loadNext")," will ",(0,l.mdx)("em",{parentName:"li"},"always")," use the same variables that were originally used to fetch the connection, ",(0,l.mdx)("em",{parentName:"li"},"except")," pagination variables (which need to change in order to perform pagination); changing variables other than the pagination variables during pagination doesn't make sense, since that'd mean we'd be querying for a different connection."))))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"loadPrevious"),': Function used to fetch more items in the connection in the "backward" direction.',(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Arguments:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"count"),(0,l.mdx)("em",{parentName:"li"},":")," Number that indicates how many items to query for in the pagination request."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"options"),": ",(0,l.mdx)("em",{parentName:"li"},(0,l.mdx)("em",{parentName:"em"},"[Optional]"))," options object",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"onComplete"),": Function that will be called whenever the refetch request has completed, including any incremental data payloads. If an error occurs during the request, ",(0,l.mdx)("inlineCode",{parentName:"li"},"onComplete")," will be called with an ",(0,l.mdx)("inlineCode",{parentName:"li"},"Error")," object as the first parameter."))))),(0,l.mdx)("li",{parentName:"ul"},"Return Value:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"disposable"),": Object containing a ",(0,l.mdx)("inlineCode",{parentName:"li"},"dispose")," function. Calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"disposable.dispose()")," will cancel the pagination request."))),(0,l.mdx)("li",{parentName:"ul"},"Behavior:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"loadPrevious"),"  ",(0,l.mdx)("em",{parentName:"li"},"will not")," cause the component to suspend. Instead, the ",(0,l.mdx)("inlineCode",{parentName:"li"},"isLoadingPrevious")," value will be set to true while the request is in flight, and the new items from the pagination request will be added to the connection, causing the component to re-render."),(0,l.mdx)("li",{parentName:"ul"},"Pagination requests initiated from calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"loadPrevious")," will ",(0,l.mdx)("em",{parentName:"li"},"always")," use the same variables that were originally used to fetch the connection, ",(0,l.mdx)("em",{parentName:"li"},"except")," pagination variables (which need to change in order to perform pagination); changing variables other than the pagination variables during pagination doesn't make sense, since that'd mean we'd be querying for a different connection."))))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"refetch"),": Function used to refetch the connection fragment with a potentially new set of variables.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Arguments:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"variables"),": Object containing the new set of variable values to be used to fetch the ",(0,l.mdx)("inlineCode",{parentName:"li"},"@refetchable")," query.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"These variables need to match GraphQL variables referenced inside the fragment."),(0,l.mdx)("li",{parentName:"ul"},"However, only the variables that are intended to change for the refetch request need to be specified; any variables referenced by the fragment that are omitted from this input will fall back to using the value specified in the original parent query. So for example, to refetch the fragment with the exact same variables as it was originally fetched, you can call ",(0,l.mdx)("inlineCode",{parentName:"li"},"refetch({})"),"."),(0,l.mdx)("li",{parentName:"ul"},"Similarly, passing an ",(0,l.mdx)("inlineCode",{parentName:"li"},"id")," value for the ",(0,l.mdx)("inlineCode",{parentName:"li"},"$id")," variable is ",(0,l.mdx)("em",{parentName:"li"},(0,l.mdx)("em",{parentName:"em"},"optional")),", unless the fragment wants to be refetched with a different ",(0,l.mdx)("inlineCode",{parentName:"li"},"id"),". When refetching a ",(0,l.mdx)("inlineCode",{parentName:"li"},"@refetchable")," fragment, Relay will already know the id of the rendered object."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"options"),": ",(0,l.mdx)("em",{parentName:"li"},(0,l.mdx)("em",{parentName:"em"},"[Optional]"))," options object",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"fetchPolicy"),": Determines if cached data should be used, and when to send a network request based on cached data that is available. See the ",(0,l.mdx)("a",{parentName:"li",href:"../../guided-tour/reusing-cached-data/fetch-policies/"},"Fetch Policies")," section for full specification."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"onComplete"),": Function that will be called whenever the refetch request has completed, including any incremental data payloads."))))),(0,l.mdx)("li",{parentName:"ul"},"Return value:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"disposable"),": Object containing a ",(0,l.mdx)("inlineCode",{parentName:"li"},"dispose")," function. Calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"disposable.dispose()")," will cancel the refetch request."))),(0,l.mdx)("li",{parentName:"ul"},"Behavior:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"refetch")," with a new set of variables will fetch the fragment again ",(0,l.mdx)("em",{parentName:"li"},"with the newly provided variables"),". Note that the variables you need to provide are only the ones referenced inside the fragment. In this example, it means fetching the translated body of the currently rendered Comment, by passing a new value to the ",(0,l.mdx)("inlineCode",{parentName:"li"},"lang")," variable."),(0,l.mdx)("li",{parentName:"ul"},"Calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"refetch")," will re-render your component and may cause it to ",(0,l.mdx)("em",{parentName:"li"},(0,l.mdx)("a",{parentName:"em",href:"../../guided-tour/rendering/loading-states"},"suspend")),", depending on the specified ",(0,l.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," and whether cached data is available or if it needs to send and wait for a network request. If refetch causes the component to suspend, you'll need to make sure that there's a ",(0,l.mdx)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping this component."),(0,l.mdx)("li",{parentName:"ul"},"For more details on Suspense, see our ",(0,l.mdx)("a",{parentName:"li",href:"../../guided-tour/rendering/loading-states/"},"Loading States with Suspense")," guide."))))))),(0,l.mdx)("h3",{id:"behavior"},"Behavior"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The component is automatically subscribed to updates to the fragment data: if the data for this particular ",(0,l.mdx)("inlineCode",{parentName:"li"},"User")," is updated anywhere in the app (e.g. via fetching new data, or mutating existing data), the component will automatically re-render with the latest updated data."),(0,l.mdx)("li",{parentName:"ul"},"The component will suspend if any data for that specific fragment is missing, and the data is currently being fetched by a parent query.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"For more details on Suspense, see our ",(0,l.mdx)("a",{parentName:"li",href:"../../guided-tour/rendering/loading-states/"},"Loading States with Suspense")," guide."))),(0,l.mdx)("li",{parentName:"ul"},"Note that pagination (",(0,l.mdx)("inlineCode",{parentName:"li"},"loadNext")," or ",(0,l.mdx)("inlineCode",{parentName:"li"},"loadPrevious"),"), ",(0,l.mdx)("em",{parentName:"li"},"will not")," cause the component to suspend.")),(0,l.mdx)("h3",{id:"differences-with-paginationcontainer"},"Differences with ",(0,l.mdx)("inlineCode",{parentName:"h3"},"PaginationContainer")),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"A pagination query no longer needs to be specified in this api, since it will be automatically generated by Relay by using a ",(0,l.mdx)("inlineCode",{parentName:"li"},"@refetchable")," fragment."),(0,l.mdx)("li",{parentName:"ul"},"This api supports simultaneous bi-directional pagination out of the box."),(0,l.mdx)("li",{parentName:"ul"},"This api no longer requires passing a ",(0,l.mdx)("inlineCode",{parentName:"li"},"getVariables")," or ",(0,l.mdx)("inlineCode",{parentName:"li"},"getFragmentVariables")," configuration functions, like the ",(0,l.mdx)("inlineCode",{parentName:"li"},"PaginationContainer")," does.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"This implies that pagination no longer has a between ",(0,l.mdx)("inlineCode",{parentName:"li"},"variables")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"fragmentVariables"),", which were previously vaguely defined concepts. Pagination requests will always use the same variables that were originally used to fetch the connection, ",(0,l.mdx)("em",{parentName:"li"},"except")," pagination variables (which need to change in order to perform pagination); changing variables other than the pagination variables during pagination doesn't make sense, since that'd mean we'd be querying for a different connection."))),(0,l.mdx)("li",{parentName:"ul"},"This api no longer takes additional configuration like ",(0,l.mdx)("inlineCode",{parentName:"li"},"direction")," or ",(0,l.mdx)("inlineCode",{parentName:"li"},"getConnectionFromProps")," function (like Pagination Container does). These values will be automatically determined by Relay."),(0,l.mdx)("li",{parentName:"ul"},"Refetching no longer has a distinction between ",(0,l.mdx)("inlineCode",{parentName:"li"},"variables")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"fragmentVariables"),", which were previously vaguely defined concepts. Refetching will always correctly refetch and render the fragment with the variables you provide (any variables omitted in the input will fallback to using the original values in the parent query)."),(0,l.mdx)("li",{parentName:"ul"},"Refetching will unequivocally update the component, which was not always true when calling ",(0,l.mdx)("inlineCode",{parentName:"li"},"refetchConnection")," from ",(0,l.mdx)("inlineCode",{parentName:"li"},"PaginationContainer")," (it would depend on what you were querying for in the refetch query and if your fragment was defined on the right object type).")),(0,l.mdx)(o.Z,{mdxType:"DocsRating"}))}x.isMDXComponent=!0}}]);