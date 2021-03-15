(window.webpackJsonp=window.webpackJsonp||[]).push([[825],{1052:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var i=b.a.createContext({}),l=function(e){var t=b.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=l(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},s=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),d=l(a),s=r,O=d["".concat(c,".").concat(s)]||d[s]||o[s]||n;return a?b.a.createElement(O,p(p({ref:t},i),{},{components:a})):b.a.createElement(O,p({ref:t},i))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=s;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<n;i++)c[i]=a[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},898:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return l}));var r=a(3),b=a(8),n=(a(0),a(1052)),c={id:"core.metadatastorage",title:"Class: MetadataStorage",sidebar_label:"MetadataStorage",hide_title:!0},p={unversionedId:"api/classes/core.metadatastorage",id:"version-4.4/api/classes/core.metadatastorage",isDocsHomePage:!1,title:"Class: MetadataStorage",description:"Class: MetadataStorage",source:"@site/versioned_docs/version-4.4/api/classes/core.metadatastorage.md",slug:"/api/classes/core.metadatastorage",permalink:"/docs/api/classes/core.metadatastorage",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/core.metadatastorage.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1615825346,formattedLastUpdatedAt:"3/15/2021",sidebar_label:"MetadataStorage",sidebar:"version-4.4/API",previous:{title:"Class: MetadataProvider",permalink:"/docs/api/classes/core.metadataprovider"},next:{title:"Class: MetadataValidator",permalink:"/docs/api/classes/core.metadatavalidator"}},m=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"metadata",id:"metadata",children:[]},{value:"metadata",id:"metadata-1",children:[]},{value:"subscribers",id:"subscribers",children:[]}]},{value:"Methods",id:"methods",children:[{value:"decorate",id:"decorate",children:[]},{value:"find",id:"find",children:[]},{value:"get",id:"get",children:[]},{value:"getAll",id:"getall",children:[]},{value:"getByDiscriminatorColumn",id:"getbydiscriminatorcolumn",children:[]},{value:"has",id:"has",children:[]},{value:"reset",id:"reset",children:[]},{value:"set",id:"set",children:[]},{value:"clear",id:"clear",children:[]},{value:"getMetadata",id:"getmetadata",children:[]},{value:"getMetadataFromDecorator",id:"getmetadatafromdecorator",children:[]},{value:"getSubscriberMetadata",id:"getsubscribermetadata",children:[]},{value:"init",id:"init",children:[]},{value:"isKnownEntity",id:"isknownentity",children:[]}]}],i={toc:m};function l(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"class-metadatastorage"},"Class: MetadataStorage"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".MetadataStorage"),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"MetadataStorage"))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new MetadataStorage"),"(",Object(n.b)("inlineCode",{parentName:"p"},"metadata?"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",">","): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},Object(n.b)("em",{parentName:"a"},"MetadataStorage"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Name"),Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"metadata")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/core#dictionary"},Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(n.b)("em",{parentName:"td"},"any"),">",">"),Object(n.b)("td",{parentName:"tr",align:null},"...")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},Object(n.b)("em",{parentName:"a"},"MetadataStorage"))),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L12"},"packages/core/src/metadata/MetadataStorage.ts:12")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"metadata"},"metadata"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"metadata"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L12"},"packages/core/src/metadata/MetadataStorage.ts:12")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"metadata-1"},"metadata"),Object(n.b)("p",null,"\u25aa ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("inlineCode",{parentName:"p"},"Static")," ",Object(n.b)("strong",{parentName:"p"},"metadata"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L10"},"packages/core/src/metadata/MetadataStorage.ts:10")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"subscribers"},"subscribers"),Object(n.b)("p",null,"\u25aa ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("inlineCode",{parentName:"p"},"Static")," ",Object(n.b)("strong",{parentName:"p"},"subscribers"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventsubscriber"},Object(n.b)("em",{parentName:"a"},"EventSubscriber")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L11"},"packages/core/src/metadata/MetadataStorage.ts:11")),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"decorate"},"decorate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"decorate"),"(",Object(n.b)("inlineCode",{parentName:"p"},"em"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},Object(n.b)("em",{parentName:"a"},"EntityManager")),"<",Object(n.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},Object(n.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},Object(n.b)("em",{parentName:"a"},"Connection")),">",">","): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Name"),Object(n.b)("th",{parentName:"tr",align:null},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"em")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},Object(n.b)("em",{parentName:"a"},"EntityManager")),"<",Object(n.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},Object(n.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(n.b)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},Object(n.b)("em",{parentName:"a"},"Connection")),">",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L103"},"packages/core/src/metadata/MetadataStorage.ts:103")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"find"},"find"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"find"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(n.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Name"),Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(n.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("em",{parentName:"td"},"any"))))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Name"),Object(n.b)("th",{parentName:"tr",align:null},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L87"},"packages/core/src/metadata/MetadataStorage.ts:87")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"get"},"get"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"get"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"init?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),", ",Object(n.b)("inlineCode",{parentName:"p"},"validate?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),"): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Name"),Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(n.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("em",{parentName:"td"},"any"))))),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Name"),Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("em",{parentName:"td"},"string")),Object(n.b)("td",{parentName:"tr",align:null},"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"init")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("em",{parentName:"td"},"boolean")),Object(n.b)("td",{parentName:"tr",align:null},"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"validate")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("em",{parentName:"td"},"boolean")),Object(n.b)("td",{parentName:"tr",align:null},"true")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L75"},"packages/core/src/metadata/MetadataStorage.ts:75")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getall"},"getAll"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getAll"),"(): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",">"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L59"},"packages/core/src/metadata/MetadataStorage.ts:59")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getbydiscriminatorcolumn"},"getByDiscriminatorColumn"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getByDiscriminatorColumn"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"data"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">","): ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(n.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Name"),Object(n.b)("th",{parentName:"tr",align:null},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/core#entitydata"},Object(n.b)("em",{parentName:"a"},"EntityData")),"<T",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L63"},"packages/core/src/metadata/MetadataStorage.ts:63")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"has"},"has"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"has"),"(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Name"),Object(n.b)("th",{parentName:"tr",align:null},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L91"},"packages/core/src/metadata/MetadataStorage.ts:91")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"reset"},"reset"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"reset"),"(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Name"),Object(n.b)("th",{parentName:"tr",align:null},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L99"},"packages/core/src/metadata/MetadataStorage.ts:99")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"set"},"set"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"set"),"(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(n.b)("em",{parentName:"p"},"any"),">","): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(n.b)("em",{parentName:"p"},"any"),">"),Object(n.b)("h4",{id:"parameters-7"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Name"),Object(n.b)("th",{parentName:"tr",align:null},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(n.b)("em",{parentName:"td"},"any"),">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(n.b)("em",{parentName:"p"},"any"),">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L95"},"packages/core/src/metadata/MetadataStorage.ts:95")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"clear"},"clear"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"clear"),"(): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L54"},"packages/core/src/metadata/MetadataStorage.ts:54")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getmetadata"},"getMetadata"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"getMetadata"),"(): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",">"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L18"},"packages/core/src/metadata/MetadataStorage.ts:18")),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"getMetadata"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"path"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(n.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Name"),Object(n.b)("th",{parentName:"tr",align:null},"Type"),Object(n.b)("th",{parentName:"tr",align:null},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(n.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("em",{parentName:"td"},"any"))))),Object(n.b)("h4",{id:"parameters-8"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Name"),Object(n.b)("th",{parentName:"tr",align:null},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"path")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L19"},"packages/core/src/metadata/MetadataStorage.ts:19")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getmetadatafromdecorator"},"getMetadataFromDecorator"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"getMetadataFromDecorator"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"target"),": T & ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("em",{parentName:"p"},"any"),">","): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(n.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Name"),Object(n.b)("th",{parentName:"tr",align:null},"Default"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("em",{parentName:"td"},"any"))))),Object(n.b)("h4",{id:"parameters-9"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Name"),Object(n.b)("th",{parentName:"tr",align:null},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"target")),Object(n.b)("td",{parentName:"tr",align:null},"T & ",Object(n.b)("a",{parentName:"td",href:"/docs/api/modules/core#dictionary"},Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("em",{parentName:"td"},"any"),">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L38"},"packages/core/src/metadata/MetadataStorage.ts:38")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getsubscribermetadata"},"getSubscriberMetadata"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"getSubscriberMetadata"),"(): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventsubscriber"},Object(n.b)("em",{parentName:"a"},"EventSubscriber")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",">"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventsubscriber"},Object(n.b)("em",{parentName:"a"},"EventSubscriber")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L46"},"packages/core/src/metadata/MetadataStorage.ts:46")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"init"},"init"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"init"),"(): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},Object(n.b)("em",{parentName:"a"},"MetadataStorage"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},Object(n.b)("em",{parentName:"a"},"MetadataStorage"))),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L50"},"packages/core/src/metadata/MetadataStorage.ts:50")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"isknownentity"},"isKnownEntity"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"isKnownEntity"),"(",Object(n.b)("inlineCode",{parentName:"p"},"name"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("h4",{id:"parameters-10"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Name"),Object(n.b)("th",{parentName:"tr",align:null},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("inlineCode",{parentName:"td"},"name")),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/metadata/MetadataStorage.ts#L34"},"packages/core/src/metadata/MetadataStorage.ts:34")))}l.isMDXComponent=!0}}]);