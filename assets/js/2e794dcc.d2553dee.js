(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return i}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),m=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},O=function(e){var t=m(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},s=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),O=m(a),s=r,i=O["".concat(c,".").concat(s)]||O[s]||j[s]||n;return a?b.a.createElement(i,p(p({ref:t},o),{},{components:a})):b.a.createElement(i,p({ref:t},o))}));function i(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var o=2;o<n;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},264:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var r=a(3),b=a(7),n=(a(0),a(1256)),c={id:"core.datetype",title:"Class: DateType",sidebar_label:"DateType",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/core.datetype",id:"api/classes/core.datetype",isDocsHomePage:!1,title:"Class: DateType",description:"Class: DateType",source:"@site/docs/api/classes/core.datetype.md",slug:"/api/classes/core.datetype",permalink:"/docs/next/api/classes/core.datetype",editUrl:null,version:"current",sidebar_label:"DateType",sidebar:"API",previous:{title:"Class: DatabaseObjectNotFoundException",permalink:"/docs/next/api/classes/core.databaseobjectnotfoundexception"},next:{title:"Class: DeadlockException",permalink:"/docs/next/api/classes/core.deadlockexception"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"compareAsType",id:"compareastype",children:[]},{value:"convertToDatabaseValue",id:"converttodatabasevalue",children:[]},{value:"convertToDatabaseValueSQL",id:"converttodatabasevaluesql",children:[]},{value:"convertToJSValue",id:"converttojsvalue",children:[]},{value:"convertToJSValueSQL",id:"converttojsvaluesql",children:[]},{value:"getColumnType",id:"getcolumntype",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getType",id:"gettype",children:[]}]}],o={toc:l};function m(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"class-datetype"},"Class: DateType"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".DateType"),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(n.b)("em",{parentName:"a"},"Type")),"<Date, ",Object(n.b)("em",{parentName:"p"},"string"),">"),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"DateType")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new DateType"),"(): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.datetype"}),Object(n.b)("em",{parentName:"a"},"DateType"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.datetype"}),Object(n.b)("em",{parentName:"a"},"DateType"))),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"compareastype"},"compareAsType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"compareAsType"),"(): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Overrides: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6caa15e/packages/core/src/types/DateType.ts#L34"}),"packages/core/src/types/DateType.ts:34")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"converttodatabasevalue"},"convertToDatabaseValue"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"convertToDatabaseValue"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(n.b)("em",{parentName:"p"},"null")," ","|"," ",Object(n.b)("em",{parentName:"p"},"string")," ","|"," Date, ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")),"): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(n.b)("em",{parentName:"td"},"null")," ","|"," ",Object(n.b)("em",{parentName:"td"},"string")," ","|"," Date")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Overrides: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6caa15e/packages/core/src/types/DateType.ts#L8"}),"packages/core/src/types/DateType.ts:8")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"converttodatabasevaluesql"},"convertToDatabaseValueSQL"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"convertToDatabaseValueSQL"),"(",Object(n.b)("inlineCode",{parentName:"p"},"key"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")),"): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Converts a value from its JS representation to its database representation of this type."),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"key")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6caa15e/packages/core/src/types/Type.ts#L25"}),"packages/core/src/types/Type.ts:25")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"converttojsvalue"},"convertToJSValue"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"convertToJSValue"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": ",Object(n.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(n.b)("em",{parentName:"p"},"null")," ","|"," ",Object(n.b)("em",{parentName:"p"},"string")," ","|"," Date, ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")),"): Date"),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"undefined")," ","|"," ",Object(n.b)("em",{parentName:"td"},"null")," ","|"," ",Object(n.b)("em",{parentName:"td"},"string")," ","|"," Date")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Date"),Object(n.b)("p",null,"Overrides: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6caa15e/packages/core/src/types/DateType.ts#L20"}),"packages/core/src/types/DateType.ts:20")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"converttojsvaluesql"},"convertToJSValueSQL"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional"),Object(n.b)("strong",{parentName:"p"},"convertToJSValueSQL"),"(",Object(n.b)("inlineCode",{parentName:"p"},"key"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")),"): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Modifies the SQL expression (identifier, parameter) to convert to a JS value."),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"key")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6caa15e/packages/core/src/types/Type.ts#L30"}),"packages/core/src/types/Type.ts:30")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getcolumntype"},"getColumnType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getColumnType"),"(",Object(n.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",", ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")),"): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"prop")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(n.b)("em",{parentName:"td"},"any"),">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Overrides: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6caa15e/packages/core/src/types/DateType.ts#L38"}),"packages/core/src/types/DateType.ts:38")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"tojson"},"toJSON"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"toJSON"),"(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": Date, ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")),"): ",Object(n.b)("em",{parentName:"p"},"string")," ","|"," Date"),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Date")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")," ","|"," Date"),Object(n.b)("p",null,"Overrides: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6caa15e/packages/core/src/types/DateType.ts#L42"}),"packages/core/src/types/DateType.ts:42")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"gettype"},"getType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"getType"),"<JSType, DBType",">","(",Object(n.b)("inlineCode",{parentName:"p"},"cls"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core#constructor"}),Object(n.b)("em",{parentName:"a"},"Constructor")),"<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(n.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">","): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(n.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(n.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"JSType"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"DBType"))))),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"cls")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/modules/core#constructor"}),Object(n.b)("em",{parentName:"a"},"Constructor")),"<",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/core.type"}),Object(n.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),Object(n.b)("em",{parentName:"a"},"Type")),"<JSType, DBType",">"),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/core.type"}),"Type")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6caa15e/packages/core/src/types/Type.ts#L56"}),"packages/core/src/types/Type.ts:56")))}m.isMDXComponent=!0}}]);