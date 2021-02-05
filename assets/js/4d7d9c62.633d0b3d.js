(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),d=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),l=d(a),s=r,O=l["".concat(c,".").concat(s)]||l[s]||m[s]||b;return a?n.a.createElement(O,i(i({ref:t},o),{},{components:a})):n.a.createElement(O,i({ref:t},o))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},406:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),b=(a(0),a(1256)),c={id:"javascriptmetadataprovider",title:"Class: JavaScriptMetadataProvider",sidebar_label:"JavaScriptMetadataProvider"},i={unversionedId:"api/classes/javascriptmetadataprovider",id:"version-4.3/api/classes/javascriptmetadataprovider",isDocsHomePage:!1,title:"Class: JavaScriptMetadataProvider",description:"deprecated use EntitySchema instead",source:"@site/versioned_docs/version-4.3/api/classes/javascriptmetadataprovider.md",slug:"/api/classes/javascriptmetadataprovider",permalink:"/docs/4.3/api/classes/javascriptmetadataprovider",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/javascriptmetadataprovider.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612541004,sidebar_label:"JavaScriptMetadataProvider",sidebar:"version-4.3/API",previous:{title:"Class: InvalidFieldNameException",permalink:"/docs/4.3/api/classes/invalidfieldnameexception"},next:{title:"Class: JsonType",permalink:"/docs/4.3/api/classes/jsontype"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getSchema",id:"getschema",children:[]},{value:"initProperties",id:"initproperties",children:[]},{value:"initProperty",id:"initproperty",children:[]},{value:"loadEntityMetadata",id:"loadentitymetadata",children:[]},{value:"loadFromCache",id:"loadfromcache",children:[]},{value:"useCache",id:"usecache",children:[]}]}],o={toc:p};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"deprecated"))," use EntitySchema instead"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/metadataprovider"}),"MetadataProvider")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"JavaScriptMetadataProvider")))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new JavaScriptMetadataProvider"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/iconfiguration"}),"IConfiguration"),"): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/javascriptmetadataprovider"}),"JavaScriptMetadataProvider")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/metadataprovider"}),"MetadataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/metadataprovider#constructor"}),"constructor"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/metadata/MetadataProvider.ts#L9"}),"packages/core/src/metadata/MetadataProvider.ts:9"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/iconfiguration"}),"IConfiguration"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/javascriptmetadataprovider"}),"JavaScriptMetadataProvider")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"config"},"config"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"config"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/iconfiguration"}),"IConfiguration")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/metadataprovider"}),"MetadataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/metadataprovider#config"}),"config"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/metadata/MetadataProvider.ts#L11"}),"packages/core/src/metadata/MetadataProvider.ts:11"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"getschema"},"getSchema"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"getSchema"),"(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymetadata"}),"EntityMetadata"),"): any"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/metadata/JavaScriptMetadataProvider.ts#L55"}),"packages/core/src/metadata/JavaScriptMetadataProvider.ts:55"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymetadata"}),"EntityMetadata"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," any"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"initproperties"},"initProperties"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"initProperties"),"(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymetadata"}),"EntityMetadata"),", ",Object(b.b)("inlineCode",{parentName:"p"},"fallback"),": (prop: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/entityproperty"}),"EntityProperty"),") => void ","|"," Promise","<","void>): Promise","<","void>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/metadataprovider"}),"MetadataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/metadataprovider#initproperties"}),"initProperties"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/metadata/MetadataProvider.ts#L23"}),"packages/core/src/metadata/MetadataProvider.ts:23"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymetadata"}),"EntityMetadata"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"fallback")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"(prop: ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/entityproperty"}),"EntityProperty"),") => void ","|"," Promise","<","void>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"initproperty"},"initProperty"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Private"),Object(b.b)("strong",{parentName:"p"},"initProperty"),"(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/entityproperty"}),"EntityProperty"),", ",Object(b.b)("inlineCode",{parentName:"p"},"propName"),": string): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/metadata/JavaScriptMetadataProvider.ts#L43"}),"packages/core/src/metadata/JavaScriptMetadataProvider.ts:43"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/entityproperty"}),"EntityProperty"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"propName")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"loadentitymetadata"},"loadEntityMetadata"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"loadEntityMetadata"),"(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymetadata"}),"EntityMetadata"),", ",Object(b.b)("inlineCode",{parentName:"p"},"name"),": string): Promise","<","void>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/metadataprovider"}),"MetadataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/metadataprovider#loadentitymetadata"}),"loadEntityMetadata"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/metadata/JavaScriptMetadataProvider.ts#L11"}),"packages/core/src/metadata/JavaScriptMetadataProvider.ts:11"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymetadata"}),"EntityMetadata"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"loadfromcache"},"loadFromCache"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"loadFromCache"),"(",Object(b.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymetadata"}),"EntityMetadata"),", ",Object(b.b)("inlineCode",{parentName:"p"},"cache"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymetadata"}),"EntityMetadata"),"): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/metadataprovider"}),"MetadataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/metadataprovider#loadfromcache"}),"loadFromCache"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/metadata/JavaScriptMetadataProvider.ts#L28"}),"packages/core/src/metadata/JavaScriptMetadataProvider.ts:28"))),Object(b.b)("p",null,"Re-hydrates missing attributes like ",Object(b.b)("inlineCode",{parentName:"p"},"onUpdate")," (functions are lost when caching to JSON)"),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"meta")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymetadata"}),"EntityMetadata"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cache")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymetadata"}),"EntityMetadata"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"usecache"},"useCache"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"useCache"),"(): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/metadataprovider"}),"MetadataProvider"),".",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/classes/metadataprovider#usecache"}),"useCache"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/metadata/MetadataProvider.ts#L19"}),"packages/core/src/metadata/MetadataProvider.ts:19"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"))}d.isMDXComponent=!0}}]);