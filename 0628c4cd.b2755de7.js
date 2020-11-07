(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{807:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var l=b.a.createContext({}),o=function(e){var t=b.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=o(a),j=r,s=m["".concat(c,".").concat(j)]||m[j]||O[j]||n;return a?b.a.createElement(s,i(i({ref:t},l),{},{components:a})):b.a.createElement(s,i({ref:t},l))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=j;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<n;l++)c[l]=a[l];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var r=a(1),b=a(6),n=(a(0),a(807)),c={id:"iwrappedentityinternal",title:"Interface: IWrappedEntityInternal<T, PK, P>",sidebar_label:"IWrappedEntityInternal"},i={unversionedId:"api/interfaces/iwrappedentityinternal",id:"api/interfaces/iwrappedentityinternal",isDocsHomePage:!1,title:"Interface: IWrappedEntityInternal<T, PK, P>",description:"Type parameters",source:"@site/docs/api/interfaces/iwrappedentityinternal.md",slug:"/api/interfaces/iwrappedentityinternal",permalink:"/docs/next/api/interfaces/iwrappedentityinternal",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/interfaces/iwrappedentityinternal.md",version:"current",sidebar_label:"IWrappedEntityInternal",sidebar:"API",previous:{title:"Interface: IWrappedEntity<T, PK, P>",permalink:"/docs/next/api/interfaces/iwrappedentity"},next:{title:"Interface: Index",permalink:"/docs/next/api/interfaces/index"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"__data",id:"__data",children:[]},{value:"__em",id:"__em",children:[]},{value:"__identifier",id:"__identifier",children:[]},{value:"__initialized",id:"__initialized",children:[]},{value:"__lazyInitialized",id:"__lazyinitialized",children:[]},{value:"__managed",id:"__managed",children:[]},{value:"__meta",id:"__meta",children:[]},{value:"__originalEntityData",id:"__originalentitydata",children:[]},{value:"__platform",id:"__platform",children:[]},{value:"__populated",id:"__populated",children:[]},{value:"__primaryKeyCond",id:"__primarykeycond",children:[]},{value:"__primaryKeys",id:"__primarykeys",children:[]},{value:"__serializationContext",id:"__serializationcontext",children:[]}]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"getPrimaryKey",id:"getprimarykey",children:[]},{value:"getSerializedPrimaryKey",id:"getserializedprimarykey",children:[]},{value:"hasPrimaryKey",id:"hasprimarykey",children:[]},{value:"init",id:"init",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"populated",id:"populated",children:[]},{value:"setPrimaryKey",id:"setprimarykey",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"toObject",id:"toobject",children:[]},{value:"toReference",id:"toreference",children:[]}]}],l={rightToc:p};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"type-parameters"},"Type parameters"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"PK")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"keyof T"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"P")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"keyof T")))),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/iwrappedentity"}),"IWrappedEntity"),"<","T, PK, P>"),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"IWrappedEntityInternal")))),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"__data"},"_","_","data"),Object(n.b)("p",null,"\u2022  ",Object(n.b)("strong",{parentName:"p"},"_","_","data"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L87"}),"packages/core/src/typings.ts:87"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"__em"},"_","_","em"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"_","_","em"),": any"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L88"}),"packages/core/src/typings.ts:88"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"__identifier"},"_","_","identifier"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"_","_","identifier"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/entityidentifier"}),"EntityIdentifier")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L92"}),"packages/core/src/typings.ts:92"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"__initialized"},"_","_","initialized"),Object(n.b)("p",null,"\u2022  ",Object(n.b)("strong",{parentName:"p"},"_","_","initialized"),": boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L90"}),"packages/core/src/typings.ts:90"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"__lazyinitialized"},"_","_","lazyInitialized"),Object(n.b)("p",null,"\u2022  ",Object(n.b)("strong",{parentName:"p"},"_","_","lazyInitialized"),": boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L95"}),"packages/core/src/typings.ts:95"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"__managed"},"_","_","managed"),Object(n.b)("p",null,"\u2022  ",Object(n.b)("strong",{parentName:"p"},"_","_","managed"),": boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L93"}),"packages/core/src/typings.ts:93"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"__meta"},"_","_","meta"),Object(n.b)("p",null,"\u2022  ",Object(n.b)("strong",{parentName:"p"},"_","_","meta"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L86"}),"packages/core/src/typings.ts:86"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"__originalentitydata"},"_","_","originalEntityData"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"_","_","originalEntityData"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#entitydata"}),"EntityData"),"<","T>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L91"}),"packages/core/src/typings.ts:91"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"__platform"},"_","_","platform"),Object(n.b)("p",null,"\u2022  ",Object(n.b)("strong",{parentName:"p"},"_","_","platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/platform"}),"Platform")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L89"}),"packages/core/src/typings.ts:89"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"__populated"},"_","_","populated"),Object(n.b)("p",null,"\u2022  ",Object(n.b)("strong",{parentName:"p"},"_","_","populated"),": boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L94"}),"packages/core/src/typings.ts:94"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"__primarykeycond"},"_","_","primaryKeyCond"),Object(n.b)("p",null,"\u2022  ",Object(n.b)("strong",{parentName:"p"},"_","_","primaryKeyCond"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#primary"}),"Primary"),"<","T> ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#primary"}),"Primary"),"<","T>[]"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L97"}),"packages/core/src/typings.ts:97"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"__primarykeys"},"_","_","primaryKeys"),Object(n.b)("p",null,"\u2022  ",Object(n.b)("strong",{parentName:"p"},"_","_","primaryKeys"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#primary"}),"Primary"),"<","T>[]"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L96"}),"packages/core/src/typings.ts:96"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"__serializationcontext"},"_","_","serializationContext"),Object(n.b)("p",null,"\u2022  ",Object(n.b)("strong",{parentName:"p"},"_","_","serializationContext"),": { populate?: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#populateoptions"}),"PopulateOptions"),"<","T>[] ; root?: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/serializationcontext"}),"SerializationContext"),"<","T>  }"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L98"}),"packages/core/src/typings.ts:98"))),Object(n.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"populate?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api#populateoptions"}),"PopulateOptions"),"<","T>[]")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"root?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/serializationcontext"}),"SerializationContext"),"<","T>")))),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"assign"},"assign"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"assign"),"(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": any, ",Object(n.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/assignoptions"}),"AssignOptions")," ","|"," boolean): T"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity"}),"IWrappedEntity"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity#assign"}),"assign"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L78"}),"packages/core/src/typings.ts:78"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"options?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/assignoptions"}),"AssignOptions")," ","|"," boolean")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getprimarykey"},"getPrimaryKey"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getPrimaryKey"),"(): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#primary"}),"Primary"),"<","T>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L83"}),"packages/core/src/typings.ts:83"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#primary"}),"Primary"),"<","T>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getserializedprimarykey"},"getSerializedPrimaryKey"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getSerializedPrimaryKey"),"(): string & keyof T"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L85"}),"packages/core/src/typings.ts:85"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," string & keyof T"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"hasprimarykey"},"hasPrimaryKey"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"hasPrimaryKey"),"(): boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L82"}),"packages/core/src/typings.ts:82"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"init"},"init"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"init"),"<","P>(",Object(n.b)("inlineCode",{parentName:"p"},"populated?"),": boolean, ",Object(n.b)("inlineCode",{parentName:"p"},"populate?"),": P, ",Object(n.b)("inlineCode",{parentName:"p"},"lockMode?"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/enums/lockmode"}),"LockMode"),"): Promise","<","T>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity"}),"IWrappedEntity"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity#init"}),"init"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L74"}),"packages/core/src/typings.ts:74"))),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"P")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api#populate"}),"Populate"),"<","T>"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Populate\\","<","T>")))),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"populated?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"populate?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"P")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"lockMode?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/enums/lockmode"}),"LockMode"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Promise","<","T>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"isinitialized"},"isInitialized"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"isInitialized"),"(): boolean"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity"}),"IWrappedEntity"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity#isinitialized"}),"isInitialized"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L72"}),"packages/core/src/typings.ts:72"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"populated"},"populated"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"populated"),"(",Object(n.b)("inlineCode",{parentName:"p"},"populated?"),": boolean): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity"}),"IWrappedEntity"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity#populated"}),"populated"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L73"}),"packages/core/src/typings.ts:73"))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"populated?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"setprimarykey"},"setPrimaryKey"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"setPrimaryKey"),"(",Object(n.b)("inlineCode",{parentName:"p"},"val"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#primary"}),"Primary"),"<","T>): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L84"}),"packages/core/src/typings.ts:84"))),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"val")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api#primary"}),"Primary"),"<","T>")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"tojson"},"toJSON"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"toJSON"),"(...",Object(n.b)("inlineCode",{parentName:"p"},"args"),": any[]): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity"}),"IWrappedEntity"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity#tojson"}),"toJSON"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L77"}),"packages/core/src/typings.ts:77"))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"...args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"toobject"},"toObject"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"toObject"),"(",Object(n.b)("inlineCode",{parentName:"p"},"ignoreFields?"),": string[]): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity"}),"IWrappedEntity"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity#toobject"}),"toObject"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L76"}),"packages/core/src/typings.ts:76"))),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"ignoreFields?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#dictionary"}),"Dictionary")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"toreference"},"toReference"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"toReference"),"<","PK2, P2>(): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#identifiedreference"}),"IdentifiedReference"),"<","T, PK2> & ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/loadedreference"}),"LoadedReference"),"<","T, P2>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity"}),"IWrappedEntity"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/interfaces/iwrappedentity#toreference"}),"toReference"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/5b0b086/packages/core/src/typings.ts#L75"}),"packages/core/src/typings.ts:75"))),Object(n.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"PK2")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PK"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"never")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"P2")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"P"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"never")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api#identifiedreference"}),"IdentifiedReference"),"<","T, PK2> & ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/loadedreference"}),"LoadedReference"),"<","T, P2>"))}o.isMDXComponent=!0}}]);