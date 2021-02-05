(window.webpackJsonp=window.webpackJsonp||[]).push([[1039],{1109:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(1256)),c={id:"node",title:"Interface: Node",sidebar_label:"Node"},i={unversionedId:"api/interfaces/node",id:"version-4.3/api/interfaces/node",isDocsHomePage:!1,title:"Interface: Node",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/interfaces/node.md",slug:"/api/interfaces/node",permalink:"/docs/4.3/api/interfaces/node",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/interfaces/node.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612541004,sidebar_label:"Node",sidebar:"version-4.3/API",previous:{title:"Interface: NamingStrategy",permalink:"/docs/4.3/api/interfaces/namingstrategy"},next:{title:"Interface: OneToOneOptions<T, O>",permalink:"/docs/4.3/api/interfaces/onetooneoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"dependencies",id:"dependencies",children:[]},{value:"hash",id:"hash",children:[]},{value:"state",id:"state",children:[]}]}],s={toc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Node"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"dependencies"},"dependencies"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"dependencies"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary"),"<",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/edge"}),"Edge"),">"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L13"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:13"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"hash"},"hash"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"hash"),": string"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L11"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:11"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"state"},"state"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"state"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/enums/nodestate"}),"NodeState")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L12"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:12"))))}b.isMDXComponent=!0},1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(r),u=n,m=l["".concat(c,".").concat(u)]||l[u]||d[u]||o;return r?a.a.createElement(m,i(i({ref:t},s),{},{components:r})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);