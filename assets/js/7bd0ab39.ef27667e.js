(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{1253:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,O=s["".concat(c,".").concat(u)]||s[u]||m[u]||b;return n?a.a.createElement(O,i(i({ref:t},o),{},{components:n})):a.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var o=2;o<b;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},631:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),b=(n(0),n(1253)),c={id:"column",title:"Interface: Column",sidebar_label:"Column"},i={unversionedId:"api/interfaces/column",id:"version-4.3/api/interfaces/column",isDocsHomePage:!1,title:"Interface: Column",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/interfaces/column.md",slug:"/api/interfaces/column",permalink:"/docs/4.3/api/interfaces/column",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/interfaces/column.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611736712,sidebar_label:"Column",sidebar:"version-4.3/API",previous:{title:"Interface: CacheAdapter",permalink:"/docs/4.3/api/interfaces/cacheadapter"},next:{title:"Interface: ConnectionConfig",permalink:"/docs/4.3/api/interfaces/connectionconfig"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"defaultValue",id:"defaultvalue",children:[]},{value:"enumItems",id:"enumitems",children:[]},{value:"fk",id:"fk",children:[]},{value:"fks",id:"fks",children:[]},{value:"indexes",id:"indexes",children:[]},{value:"maxLength",id:"maxlength",children:[]},{value:"name",id:"name",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"primary",id:"primary",children:[]},{value:"type",id:"type",children:[]},{value:"unique",id:"unique",children:[]}]}],o={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Column"))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"defaultvalue"},"defaultValue"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"defaultValue"),": string ","|"," null"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L40"}),"packages/knex/src/typings.ts:40"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"enumitems"},"enumItems"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"enumItems"),": string[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L41"}),"packages/knex/src/typings.ts:41"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fk"},"fk"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"fk"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/foreignkey"}),"ForeignKey")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L33"}),"packages/knex/src/typings.ts:33"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fks"},"fks"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"fks"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/foreignkey"}),"ForeignKey"),"[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L34"}),"packages/knex/src/typings.ts:34"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"indexes"},"indexes"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"indexes"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/index"}),"Index"),"[]"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L35"}),"packages/knex/src/typings.ts:35"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"maxlength"},"maxLength"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"maxLength"),": number"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L39"}),"packages/knex/src/typings.ts:39"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"name"},"name"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"name"),": string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L31"}),"packages/knex/src/typings.ts:31"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nullable"},"nullable"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"nullable"),": boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L38"}),"packages/knex/src/typings.ts:38"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"primary"},"primary"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"primary"),": boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L36"}),"packages/knex/src/typings.ts:36"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"type"},"type"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"type"),": string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L32"}),"packages/knex/src/typings.ts:32"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unique"},"unique"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"unique"),": boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/typings.ts#L37"}),"packages/knex/src/typings.ts:37"))))}l.isMDXComponent=!0}}]);