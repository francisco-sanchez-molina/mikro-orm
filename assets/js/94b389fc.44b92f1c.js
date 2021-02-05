(window.webpackJsonp=window.webpackJsonp||[]).push([[670],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},m=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,u=m["".concat(i,".").concat(d)]||m[d]||s[d]||c;return a?n.a.createElement(u,b(b({ref:t},o),{},{components:a})):n.a.createElement(u,b({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=d;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var o=2;o<c;o++)i[o]=a[o];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},740:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),c=(a(0),a(1256)),i={id:"knex.knex.withschema",title:"Interface: WithSchema<TRecord, TResult>",sidebar_label:"WithSchema",hide_title:!0},b={unversionedId:"api/interfaces/knex.knex.withschema",id:"version-4.4/api/interfaces/knex.knex.withschema",isDocsHomePage:!1,title:"Interface: WithSchema<TRecord, TResult>",description:"Interface: WithSchema",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.withschema.md",slug:"/api/interfaces/knex.knex.withschema",permalink:"/docs/api/interfaces/knex.knex.withschema",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.withschema.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612541004,sidebar_label:"WithSchema",sidebar:"version-4.4/API",previous:{title:"Interface: WithRaw<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.withraw"},next:{title:"Interface: WithWrapped<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.withwrapped"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],o={toc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-withschematrecord-tresult"},"Interface: WithSchema<TRecord, TResult",">"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".WithSchema"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"TRecord")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"any"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"TResult")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"WithSchema"))),Object(c.b)("h2",{id:"callable"},"Callable"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"WithSchema"),"(",Object(c.b)("inlineCode",{parentName:"p"},"schema"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"schema")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(c.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),Object(c.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1190"))}p.isMDXComponent=!0}}]);