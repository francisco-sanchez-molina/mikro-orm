(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(6),c=(n(0),n(804)),o={id:"generatecachecommand",title:"Class: GenerateCacheCommand",sidebar_label:"GenerateCacheCommand"},i={unversionedId:"api/classes/generatecachecommand",id:"version-4.2/api/classes/generatecachecommand",isDocsHomePage:!1,title:"Class: GenerateCacheCommand",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/classes/generatecachecommand.md",slug:"/api/classes/generatecachecommand",permalink:"/docs/api/classes/generatecachecommand",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/generatecachecommand.md",version:"4.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1603660940,sidebar_label:"GenerateCacheCommand",sidebar:"version-4.2/API",previous:{title:"Class: ForeignKeyConstraintViolationException",permalink:"/docs/api/classes/foreignkeyconstraintviolationexception"},next:{title:"Class: GenerateEntitiesCommand<U>",permalink:"/docs/api/classes/generateentitiescommand"}},m=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Properties",id:"properties",children:[{value:"command",id:"command",children:[]},{value:"describe",id:"describe",children:[]}]},{value:"Methods",id:"methods",children:[{value:"handler",id:"handler",children:[]}]}],s={rightToc:m};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GenerateCacheCommand"))),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"CommandModule")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"command"},"command"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"command"),': string = "cache:generate"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/cli/src/commands/GenerateCacheCommand.ts#L8"}),"packages/cli/src/commands/GenerateCacheCommand.ts:8"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"describe"},"describe"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"describe"),': string = "Generate metadata cache for production"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/cli/src/commands/GenerateCacheCommand.ts#L9"}),"packages/cli/src/commands/GenerateCacheCommand.ts:9"))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"handler"},"handler"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"handler"),"(",Object(c.b)("inlineCode",{parentName:"p"},"args"),": Arguments): Promise","<","void>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/cli/src/commands/GenerateCacheCommand.ts#L14"}),"packages/cli/src/commands/GenerateCacheCommand.ts:14"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"inheritdoc"))," "),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"args")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Arguments")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"))}l.isMDXComponent=!0},804:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,u=b["".concat(o,".").concat(d)]||b[d]||p[d]||c;return n?a.a.createElement(u,i(i({ref:t},s),{},{components:n})):a.a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);