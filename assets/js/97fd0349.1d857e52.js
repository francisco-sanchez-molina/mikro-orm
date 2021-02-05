(window.webpackJsonp=window.webpackJsonp||[]).push([[685],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return u}));var b=a(0),n=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),O=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},j=function(e){var t=O(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},i=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),j=O(a),i=b,u=j["".concat(c,".").concat(i)]||j[i]||d[i]||r;return a?n.a.createElement(u,l(l({ref:t},m),{},{components:a})):n.a.createElement(u,l({ref:t},m))}));function u(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,c=new Array(r);c[0]=i;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:b,c[1]=l;for(var m=2;m<r;m++)c[m]=a[m];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}i.displayName="MDXCreateElement"},755:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return O}));var b=a(3),n=a(7),r=(a(0),a(1256)),c={id:"knex.knex.groupby",title:"Interface: GroupBy<TRecord, TResult>",sidebar_label:"GroupBy",hide_title:!0},l={unversionedId:"api/interfaces/knex.knex.groupby",id:"version-4.4/api/interfaces/knex.knex.groupby",isDocsHomePage:!1,title:"Interface: GroupBy<TRecord, TResult>",description:"Interface: GroupBy",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.groupby.md",slug:"/api/interfaces/knex.knex.groupby",permalink:"/docs/api/interfaces/knex.knex.groupby",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.groupby.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612541004,sidebar_label:"GroupBy",sidebar:"version-4.4/API",previous:{title:"Interface: FunctionHelper",permalink:"/docs/api/interfaces/knex.knex.functionhelper"},next:{title:"Interface: Having<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.having"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],m={toc:p};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"interface-groupbytrecord-tresult"},"Interface: GroupBy<TRecord, TResult",">"),Object(r.b)("p",null,Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".GroupBy"),Object(r.b)("h2",{id:"type-parameters"},"Type parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TRecord")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.rawquerybuilder"}),Object(r.b)("em",{parentName:"a"},"RawQueryBuilder")),"<TRecord, TResult",">")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.columnnamequerybuilder"}),Object(r.b)("em",{parentName:"a"},"ColumnNameQueryBuilder")),"<TRecord, TResult",">"),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("strong",{parentName:"p"},"GroupBy")))),Object(r.b)("h2",{id:"callable"},"Callable"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"GroupBy"),"<TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"sql"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"bindings?"),": ",Object(r.b)("em",{parentName:"p"},"null")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string")," ","|"," ",Object(r.b)("em",{parentName:"p"},"number")," ","|"," ",Object(r.b)("em",{parentName:"p"},"boolean")," ","|"," Date ","|"," ",Object(r.b)("em",{parentName:"p"},"Buffer")," ","|"," ",Object(r.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(r.b)("em",{parentName:"p"},"number"),"[] ","|"," Date[] ","|"," ",Object(r.b)("em",{parentName:"p"},"boolean"),"[] ","|"," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.raw"}),Object(r.b)("em",{parentName:"a"},"Raw")),"<",Object(r.b)("em",{parentName:"p"},"any"),">"," ","|"," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.valuedict"}),Object(r.b)("em",{parentName:"a"},"ValueDict"))," ","|"," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("em",{parentName:"p"},"any"),">"," ","|"," readonly ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1#rawbinding"}),Object(r.b)("em",{parentName:"a"},"RawBinding")),"[]): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"TResult")))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"sql")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"bindings?")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"null")," ","|"," ",Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"number")," ","|"," ",Object(r.b)("em",{parentName:"td"},"boolean")," ","|"," Date ","|"," ",Object(r.b)("em",{parentName:"td"},"Buffer")," ","|"," ",Object(r.b)("em",{parentName:"td"},"string"),"[] ","|"," ",Object(r.b)("em",{parentName:"td"},"number"),"[] ","|"," Date[] ","|"," ",Object(r.b)("em",{parentName:"td"},"boolean"),"[] ","|"," ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.raw"}),Object(r.b)("em",{parentName:"a"},"Raw")),"<",Object(r.b)("em",{parentName:"td"},"any"),">"," ","|"," ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.valuedict"}),Object(r.b)("em",{parentName:"a"},"ValueDict"))," ","|"," ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<",Object(r.b)("em",{parentName:"td"},"any"),", ",Object(r.b)("em",{parentName:"td"},"any"),">"," ","|"," readonly ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#rawbinding"}),Object(r.b)("em",{parentName:"a"},"RawBinding")),"[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1483"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"GroupBy"),"<TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"raw"),": ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.raw"}),Object(r.b)("em",{parentName:"a"},"Raw")),"<TResult2",">","): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"TResult")))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"raw")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.raw"}),Object(r.b)("em",{parentName:"a"},"Raw")),"<TResult2",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1487"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"GroupBy"),"(",Object(r.b)("inlineCode",{parentName:"p"},"columnName"),": ",Object(r.b)("em",{parentName:"p"},"**): ["),"QueryBuilder",Object(r.b)("em",{parentName:"p"},"](/docs/api/classes/knex.knex.querybuilder)<TRecord, "),"ArrayIfAlready",Object(r.b)("em",{parentName:"p"},"<TResult, "),"DeferredKeySelection",Object(r.b)("em",{parentName:"p"},"<TRecord, "),"string",Object(r.b)("em",{parentName:"p"},", "),"false",Object(r.b)("em",{parentName:"p"},", {}, "),"false",Object(r.b)("em",{parentName:"p"},", {}, "),"never*",">",">",">"),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"columnName")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"***")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, ",Object(r.b)("em",{parentName:"p"},"ArrayIfAlready"),"<TResult, ",Object(r.b)("em",{parentName:"p"},"DeferredKeySelection"),"<TRecord, ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("em",{parentName:"p"},"false"),", {}, ",Object(r.b)("em",{parentName:"p"},"false"),", {}, ",Object(r.b)("em",{parentName:"p"},"never"),">",">",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1428"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"GroupBy"),"<ColNameUT, TResult2",">","(...",Object(r.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ColNameUT[]): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ColNameUT")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"number")," ","|"," ",Object(r.b)("em",{parentName:"td"},"symbol")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#resolvetabletype"}),Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),"\\",">","\\",">, ColNameUT & ",Object(r.b)("em",{parentName:"td"},"string"),"\\",">, {}","\\",">[]")))),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"...columnNames")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"readonly ColNameUT[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1434"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"GroupBy"),"<ColNameUT, TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ColNameUT[]): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"ColNameUT")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"number")," ","|"," ",Object(r.b)("em",{parentName:"td"},"symbol")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#resolvetabletype"}),Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),"\\",">","\\",">, ColNameUT & ",Object(r.b)("em",{parentName:"td"},"string"),"\\",">, {}","\\",">[]")))),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"columnNames")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"readonly ColNameUT[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1445"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"GroupBy"),"<TResult2",">","(...",Object(r.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1#columndescriptor"}),Object(r.b)("em",{parentName:"a"},"ColumnDescriptor")),"<TRecord, TResult",">","[]): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(r.b)("em",{parentName:"td"},"Partial"),"<",Object(r.b)("em",{parentName:"td"},"AnyOrUnknownToOther"),"<TRecord, {}","\\",">","\\",">","\\",">, keyof TRecord & ",Object(r.b)("em",{parentName:"td"},"string"),"\\",">, {}","\\",">[]")))),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"...columnNames")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"readonly ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#columndescriptor"}),Object(r.b)("em",{parentName:"a"},"ColumnDescriptor")),"<TRecord, TResult",">","[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1456"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"GroupBy"),"<TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"columnNames"),": readonly ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1#columndescriptor"}),Object(r.b)("em",{parentName:"a"},"ColumnDescriptor")),"<TRecord, TResult",">","[]): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-6"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(r.b)("em",{parentName:"td"},"Partial"),"<",Object(r.b)("em",{parentName:"td"},"AnyOrUnknownToOther"),"<TRecord, {}","\\",">","\\",">","\\",">, keyof TRecord & ",Object(r.b)("em",{parentName:"td"},"string"),"\\",">, {}","\\",">[]")))),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"columnNames")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"readonly ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#columndescriptor"}),Object(r.b)("em",{parentName:"a"},"ColumnDescriptor")),"<TRecord, TResult",">","[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1468"))}O.isMDXComponent=!0}}]);