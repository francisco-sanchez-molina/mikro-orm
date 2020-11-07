(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{461:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),a=(n(0),n(807)),i={title:"Installation & Usage"},s={unversionedId:"installation",id:"version-2.7/installation",isDocsHomePage:!1,title:"Installation & Usage",description:"First install the module via yarn or npm and do not forget to install the database driver as well:",source:"@site/versioned_docs/version-2.7/installation.md",slug:"/installation",permalink:"/docs/2.7/installation",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/installation.md",version:"2.7",lastUpdatedBy:"Taha Abdelmoutaleb Cherfia",lastUpdatedAt:1604787396,sidebar:"version-2.7/docs",next:{title:"Defining entities",permalink:"/docs/2.7/defining-entities"}},c=[{value:"Entity discovery in TypeScript",id:"entity-discovery-in-typescript",children:[]},{value:"Request context",id:"request-context",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"First install the module via ",Object(a.b)("inlineCode",{parentName:"p"},"yarn")," or ",Object(a.b)("inlineCode",{parentName:"p"},"npm")," and do not forget to install the database driver as well:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add mikro-orm mongodb # for mongo\n$ yarn add mikro-orm mysql2  # for mysql\n$ yarn add mikro-orm pg      # for postgresql\n$ yarn add mikro-orm sqlite  # for sqlite\n")),Object(a.b)("p",null,"or"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm i -s mikro-orm mongodb # for mongo\n$ npm i -s mikro-orm mysql2  # for mysql\n$ npm i -s mikro-orm pg      # for postgresql\n$ npm i -s mikro-orm sqlite  # for sqlite\n")),Object(a.b)("p",null,"Next you will need to enable support for ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/decorators.html"}),"decorators"),"\nin ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," via:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"experimentalDecorators": true\n')),Object(a.b)("p",null,"Then call ",Object(a.b)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entities: [Author, Book, BookTag],\n  dbName: 'my-db-name',\n  clientUrl: '...', // defaults to 'mongodb://localhost:27017' for mongodb driver\n  autoFlush: false, // read more here: https://mikro-orm.io/unit-of-work/\n});\nconsole.log(orm.em); // access EntityManager via `em` property\n")),Object(a.b)("p",null,"You can also provide paths where you store your entities via ",Object(a.b)("inlineCode",{parentName:"p"},"entitiesDirs")," array. Internally\nit uses ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/sindresorhus/globby"}),Object(a.b)("inlineCode",{parentName:"a"},"globby"))," so you can use\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/sindresorhus/globby#globbing-patterns"}),"globbing patterns"),". "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entitiesDirs: ['./dist/app/**/entities'],\n  // ...\n});\n")),Object(a.b)("p",null,"You should provide list of directories, not paths to entities directly. If you want to do that\ninstead, you should use ",Object(a.b)("inlineCode",{parentName:"p"},"entities")," array and use ",Object(a.b)("inlineCode",{parentName:"p"},"globby")," manually:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { sync } from 'globby';\n\nconst orm = await MikroORM.init({\n  entities: sync('./dist/app/**/entities/*.js').map(require),\n  // ...\n});\n")),Object(a.b)("h2",{id:"entity-discovery-in-typescript"},"Entity discovery in TypeScript"),Object(a.b)("p",null,"Internally, ",Object(a.b)("inlineCode",{parentName:"p"},"MikroORM")," uses ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/2.7/metadata-cache"}),"performs analysis")," of source files of entities\nto sniff types of all properties. This process can be slow if your project contains lots of\nfiles. To speed up the discovery process a bit, you can provide more accurate paths where your\nentity source files are: "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entitiesDirs: ['./dist/entities'], // path to your JS entities (dist), relative to `baseDir`\n  entitiesDirsTs: ['./src/entities'], // path to your TS entities (source), relative to `baseDir`\n  // ...\n});\n")),Object(a.b)("h2",{id:"request-context"},"Request context"),Object(a.b)("p",null,"Then you will need to fork entity manager for each request so their identity maps will not\ncollide. To do so, use the ",Object(a.b)("inlineCode",{parentName:"p"},"RequestContext")," helper:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const app = express();\n\napp.use((req, res, next) => {\n  RequestContext.create(orm.em, next);\n});\n")),Object(a.b)("p",null,"More info about ",Object(a.b)("inlineCode",{parentName:"p"},"RequestContext")," is described ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/2.7/identity-map#request-context"}),"here"),"."),Object(a.b)("p",null,"Now you can start ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/2.7/defining-entities"}),"defining your entities")," (in one of the ",Object(a.b)("inlineCode",{parentName:"p"},"entitiesDirs")," folders)."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/2.7/index#table-of-contents"}),"\u2190"," Back to table of contents")))}p.isMDXComponent=!0},807:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);