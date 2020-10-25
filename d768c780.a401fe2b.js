(window.webpackJsonp=window.webpackJsonp||[]).push([[617],{675:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(6),i=(r(0),r(804)),l={id:"nullhighlighter",title:"Class: NullHighlighter",sidebar_label:"NullHighlighter"},c={unversionedId:"api/classes/nullhighlighter",id:"version-4.2/api/classes/nullhighlighter",isDocsHomePage:!1,title:"Class: NullHighlighter",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/classes/nullhighlighter.md",slug:"/api/classes/nullhighlighter",permalink:"/docs/api/classes/nullhighlighter",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/nullhighlighter.md",version:"4.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1603660940,sidebar_label:"NullHighlighter",sidebar:"version-4.2/API",previous:{title:"Class: NullCacheAdapter",permalink:"/docs/api/classes/nullcacheadapter"},next:{title:"Class: ObjectCriteriaNode",permalink:"/docs/api/classes/objectcriterianode"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Methods",id:"methods",children:[{value:"highlight",id:"highlight",children:[]}]}],s={rightToc:o};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"NullHighlighter"))),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/interfaces/highlighter"}),"Highlighter"))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"highlight"},"highlight"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"highlight"),"(",Object(i.b)("inlineCode",{parentName:"p"},"text"),": string): string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Implementation of ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/interfaces/highlighter"}),"Highlighter"))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/utils/NullHighlighter.ts#L5"}),"packages/core/src/utils/NullHighlighter.ts:5"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"text")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," string"))}b.isMDXComponent=!0},804:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(r),u=n,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);