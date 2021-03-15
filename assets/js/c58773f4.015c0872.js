(window.webpackJsonp=window.webpackJsonp||[]).push([[741],{1052:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(a,".").concat(u)]||d[u]||b[u]||i;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},814:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),i=(n(0),n(1052)),a={title:"Serializing"},c={unversionedId:"serializing",id:"version-3.6/serializing",isDocsHomePage:!1,title:"Serializing",description:"By default, all entities are monkey patched with toObject() and toJSON methods:",source:"@site/versioned_docs/version-3.6/serializing.md",slug:"/serializing",permalink:"/docs/3.6/serializing",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/serializing.md",version:"3.6",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1615825346,formattedLastUpdatedAt:"3/15/2021",sidebar:"version-3.6/docs",previous:{title:"Propagation",permalink:"/docs/3.6/propagation"},next:{title:"EntityHelper and Decorated Entities",permalink:"/docs/3.6/entity-helper"}},l=[{value:"Hidden Properties",id:"hidden-properties",children:[]},{value:"Shadow Properties",id:"shadow-properties",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"By default, all entities are monkey patched with ",Object(i.b)("inlineCode",{parentName:"p"},"toObject()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"toJSON")," methods:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"export interface AnyEntity<K = number | string> {\n  toObject(parent?: AnyEntity, isCollection?: boolean): Record<string, any>;\n  toJSON(...args: any[]): Record<string, any>;\n  // ...\n}\n")),Object(i.b)("p",null,"When you serialize your entity via ",Object(i.b)("inlineCode",{parentName:"p"},"JSON.stringify(entity)"),", its ",Object(i.b)("inlineCode",{parentName:"p"},"toJSON")," method will be\ncalled automatically. You can provide custom implementation for ",Object(i.b)("inlineCode",{parentName:"p"},"toJSON"),", while using\n",Object(i.b)("inlineCode",{parentName:"p"},"toObject")," for initial serialization:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  // ...\n\n  toJSON(strict = true, strip = ['id', 'email'], ...args: any[]): { [p: string]: any } {\n    const o = this.toObject(...args); // do not forget to pass rest params here\n\n    if (strict) {\n      strip.forEach(k => delete o[k]);\n    }\n\n    return o;\n  }\n\n}\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Do not forget to pass rest params when calling ",Object(i.b)("inlineCode",{parentName:"p"},"toObject(...args)"),", otherwise the results\nmight not be stable.")),Object(i.b)("h2",{id:"hidden-properties"},"Hidden Properties"),Object(i.b)("p",null,"If you want to omit some properties from serialized result, you can mark them with ",Object(i.b)("inlineCode",{parentName:"p"},"hidden"),"\nflag on ",Object(i.b)("inlineCode",{parentName:"p"},"@Property()")," decorator:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @Property({ hidden: true })\n  hiddenField = Date.now();\n\n}\n\nconst book = new Book(...);\nconsole.log(book.toObject().hiddenField); // undefined\nconsole.log(book.toJSON().hiddenField); // undefined\n")),Object(i.b)("h2",{id:"shadow-properties"},"Shadow Properties"),Object(i.b)("p",null,"The opposite situation where you want to define a property that lives only in memory (is\nnot persisted into database) can be solved by defining your property as ",Object(i.b)("inlineCode",{parentName:"p"},"persist: false"),".\nSuch property can be assigned via one of ",Object(i.b)("inlineCode",{parentName:"p"},"Entity.assign()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"em.create()")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"em.merge()"),". It will be also part of serialized result. "),Object(i.b)("p",null,"This can be handle when dealing with additional values selected via ",Object(i.b)("inlineCode",{parentName:"p"},"QueryBuilder")," or\nMongoDB's aggregations."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @Property({ persist: false })\n  count?: number;\n\n}\n\nconst book = new Book(...);\nbook.assign({ count: 123 });\nconsole.log(book.toObject().count); // 123\nconsole.log(book.toJSON().count); // 123\n")))}p.isMDXComponent=!0}}]);