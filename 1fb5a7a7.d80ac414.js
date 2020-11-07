(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return m}));var r=a(1),n=a(6),i=(a(0),a(807)),b={id:"imigrator",title:"Interface: IMigrator",sidebar_label:"IMigrator"},c={unversionedId:"api/interfaces/imigrator",id:"version-4.2/api/interfaces/imigrator",isDocsHomePage:!1,title:"Interface: IMigrator",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/interfaces/imigrator.md",slug:"/api/interfaces/imigrator",permalink:"/docs/api/interfaces/imigrator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/interfaces/imigrator.md",version:"4.2",lastUpdatedBy:"Taha Abdelmoutaleb Cherfia",lastUpdatedAt:1604787396,sidebar_label:"IMigrator",sidebar:"version-4.2/API",previous:{title:"Interface: IMetadataStorage",permalink:"/docs/api/interfaces/imetadatastorage"},next:{title:"Interface: IQueryBuilder<T>",permalink:"/docs/api/interfaces/iquerybuilder"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"createMigration",id:"createmigration",children:[]},{value:"down",id:"down",children:[]},{value:"getExecutedMigrations",id:"getexecutedmigrations",children:[]},{value:"getPendingMigrations",id:"getpendingmigrations",children:[]},{value:"up",id:"up",children:[]}]}],p={rightToc:o};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"IMigrator"))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"createmigration"},"createMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"createMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"path?"),": string, ",Object(i.b)("inlineCode",{parentName:"p"},"blank?"),": boolean, ",Object(i.b)("inlineCode",{parentName:"p"},"initial?"),": boolean): Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrationresult"}),"MigrationResult"),">"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L324"}),"packages/core/src/typings.ts:324"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"path?")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"blank?")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"initial?")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrationresult"}),"MigrationResult"),">"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"down"},"down"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"down"),"(",Object(i.b)("inlineCode",{parentName:"p"},"options?"),": string ","|"," string[] ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrateoptions"}),"MigrateOptions"),"): Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#umzugmigration"}),"UmzugMigration"),"[]>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L328"}),"packages/core/src/typings.ts:328"))),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"options?")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," string[] ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#migrateoptions"}),"MigrateOptions"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#umzugmigration"}),"UmzugMigration"),"[]>"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getexecutedmigrations"},"getExecutedMigrations"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getExecutedMigrations"),"(): Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrationrow"}),"MigrationRow"),"[]>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L325"}),"packages/core/src/typings.ts:325"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrationrow"}),"MigrationRow"),"[]>"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getpendingmigrations"},"getPendingMigrations"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getPendingMigrations"),"(): Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#umzugmigration"}),"UmzugMigration"),"[]>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L326"}),"packages/core/src/typings.ts:326"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#umzugmigration"}),"UmzugMigration"),"[]>"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"up"},"up"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"up"),"(",Object(i.b)("inlineCode",{parentName:"p"},"options?"),": string ","|"," string[] ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrateoptions"}),"MigrateOptions"),"): Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#umzugmigration"}),"UmzugMigration"),"[]>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/typings.ts#L327"}),"packages/core/src/typings.ts:327"))),Object(i.b)("h4",{id:"parameters-2"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"options?")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," string[] ","|"," ",Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#migrateoptions"}),"MigrateOptions"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#umzugmigration"}),"UmzugMigration"),"[]>"))}m.isMDXComponent=!0},807:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return g}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),m=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=m(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=m(a),O=r,g=l["".concat(b,".").concat(O)]||l[O]||s[O]||i;return a?n.a.createElement(g,c(c({ref:t},p),{},{components:a})):n.a.createElement(g,c({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,b=new Array(i);b[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var p=2;p<i;p++)b[p]=a[p];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);