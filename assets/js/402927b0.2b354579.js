(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{1052:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=c(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},310:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(8),o=(n(0),n(1052)),i={title:"Custom Types"},l={unversionedId:"custom-types",id:"custom-types",isDocsHomePage:!1,title:"Custom Types",description:"You can define custom types by extending Type abstract class. It has several optional methods:",source:"@site/docs/custom-types.md",slug:"/custom-types",permalink:"/docs/next/custom-types",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/custom-types.md",version:"current",lastUpdatedBy:"jsprw",lastUpdatedAt:1615883247,formattedLastUpdatedAt:"3/16/2021",sidebar:"docs",previous:{title:"Composite and Foreign Keys as Primary Key",permalink:"/docs/next/composite-keys"},next:{title:"Separating Concerns using Embeddables",permalink:"/docs/next/embeddables"}},p=[{value:"Advanced example - PointType and WKT",id:"advanced-example---pointtype-and-wkt",children:[]},{value:"Types provided by MikroORM",id:"types-provided-by-mikroorm",children:[{value:"ArrayType",id:"arraytype",children:[]},{value:"BigIntType",id:"biginttype",children:[]},{value:"BlobType",id:"blobtype",children:[]},{value:"JsonType",id:"jsontype",children:[]},{value:"DateType",id:"datetype",children:[]},{value:"TimeType",id:"timetype",children:[]}]}],s={toc:p};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can define custom types by extending ",Object(o.b)("inlineCode",{parentName:"p"},"Type")," abstract class. It has several optional methods:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"convertToDatabaseValue(value: any, platform: Platform): any")),Object(o.b)("p",{parentName:"li"},"Converts a value from its JS representation to its database representation of this type.\nBy default returns unchanged ",Object(o.b)("inlineCode",{parentName:"p"},"value"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"convertToJSValue(value: any, platform: Platform): any")),Object(o.b)("p",{parentName:"li"},"Converts a value from its database representation to its JS representation of this type.\nBy default returns unchanged ",Object(o.b)("inlineCode",{parentName:"p"},"value"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"toJSON(value: any, platform: Platform): any")),Object(o.b)("p",{parentName:"li"},"Converts a value from its JS representation to its serialized JSON form of this type.\nBy default uses the runtime value.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"getColumnType(prop: EntityProperty, platform: Platform): string")),Object(o.b)("p",{parentName:"li"},"Gets the SQL declaration snippet for a field of this type.\nBy default returns ",Object(o.b)("inlineCode",{parentName:"p"},"columnType")," of given property.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"convertToDatabaseValueSQL(key: string, platform: Platform): string")),Object(o.b)("p",{parentName:"li"},"Converts a value from its JS representation to its database representation of this type.\n",Object(o.b)("em",{parentName:"p"},"(added in v4.4.2)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"convertToJSValueSQL?(key: string, platform: Platform): string")),Object(o.b)("p",{parentName:"li"},"Modifies the SQL expression (identifier, parameter) to convert to a JS value.\n",Object(o.b)("em",{parentName:"p"},"(added in v4.4.2)")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { Type, Platform, EntityProperty, ValidationError } from '@mikro-orm/core';\n\nexport class DateType extends Type<Date, string> {\n\n  convertToDatabaseValue(value: Date | string | undefined, platform: Platform): string {\n    if (value instanceof Date) {\n      return value.toISOString().substr(0, 10);\n    }\n\n    if (!value || value.toString().match(/^\\d{4}-\\d{2}-\\d{2}$/)) {\n      return value as string;\n    }\n\n    throw ValidationError.invalidType(DateType, value, 'JS');\n  }\n\n  convertToJSValue(value: Date | string | undefined, platform: Platform): Date {\n    if (!value || value instanceof Date) {\n      return value as Date;\n    }\n\n    const date = new Date(value);\n\n    if (date.toString() === 'Invalid Date') {\n      throw ValidationError.invalidType(DateType, value, 'database');\n    }\n\n    return date;\n  }\n\n  getColumnType(prop: EntityProperty, platform: Platform) {\n    return `date(${prop.length})`;\n  }\n\n}\n")),Object(o.b)("p",null,"Then you can use this type when defining your entity properties:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class FooBar {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Property({ type: DateType, length: 3 })\n  born?: Date;\n\n}\n")),Object(o.b)("h2",{id:"advanced-example---pointtype-and-wkt"},"Advanced example - PointType and WKT"),Object(o.b)("p",null,"In this example we will combine mapping values via database as well as during runtime."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The Point type is part of the Spatial extension of MySQL and enables you to store\na single location in a coordinate space by using x and y coordinates. You can use\nthe Point type to store a longitude/latitude pair to represent a geographic location.")),Object(o.b)("p",null,"First let's define the ",Object(o.b)("inlineCode",{parentName:"p"},"Point")," class that will be used to represent the value during runtime:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"export class Point {\n\n  constructor(public latitude: number,\n              public longitude: number) { }\n\n}\n")),Object(o.b)("p",null,"Then the mapping type:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"export class PointType extends Type<Point | undefined, string | undefined> {\n\n  convertToDatabaseValue(value: Point | undefined): string | undefined {\n    if (!value) {\n      return value;\n    }\n\n    return `point(${value.latitude} ${value.longitude})`;\n  }\n\n  convertToJSValue(value: string | undefined): Point | undefined {\n    const m = value?.match(/point\\((\\d+(\\.\\d+)?) (\\d+(\\.\\d+)?)\\)/i);\n\n    if (!m) {\n      return undefined;\n    }\n\n    return new Point(+m[1], +m[3]);\n  }\n\n  convertToJSValueSQL(key: string) {\n    return `ST_AsText(${key})`;\n  }\n\n  convertToDatabaseValueSQL(key: string) {\n    return `ST_PointFromText(${key})`;\n  }\n\n  getColumnType(): string {\n    return 'point';\n  }\n\n}\n")),Object(o.b)("p",null,"Now let's define an entity:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class Location {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property({ type: PointType })\n  point?: Point;\n\n}\n")),Object(o.b)("p",null,"...and use it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const loc = new Location();\nloc.point = new Point(1.23, 4.56);\nawait em.persist(loc).flush();\nem.clear();\n\nconst loc1 = await em.findOneOrFail(Location, loc.id);\n\n// update it\nloc1.point = new Point(2.34, 9.87);\nawait em.flush();\n")),Object(o.b)("p",null,"This will result in following queries:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"begin\ninsert into `location` (`point`) values (ST_PointFromText('point(1.23 4.56)'))\ncommit\n\nselect `e0`.*, ST_AsText(`e0`.point) as point from `location` as `e0` where `e0`.`id` = ? limit ?\n\nbegin\nupdate `location` set `point` = ST_PointFromText('point(2.34 9.87)') where `id` = ?\ncommit\n")),Object(o.b)("p",null,"We do a 2-step conversion here. In the first step, we convert the Point object into\na string representation before saving to the database (in the convertToDatabaseValue\nmethod) and back into an object after fetching the value from the database (in the\nconvertToJSValue method)."),Object(o.b)("p",null,"The format of the string representation format is called Well-known text (WKT). The\nadvantage of this format is, that it is both human readable and parsable by MySQL."),Object(o.b)("p",null,"Internally, MySQL stores geometry values in a binary format that is not identical to\nthe WKT format. So, we need to let MySQL transform the WKT representation into its\ninternal format."),Object(o.b)("p",null,"This is where the ",Object(o.b)("inlineCode",{parentName:"p"},"convertToJSValueSQL")," and ",Object(o.b)("inlineCode",{parentName:"p"},"convertToDatabaseValueSQL")," methods come\ninto play."),Object(o.b)("p",null,"This methods wrap a sql expression (the WKT representation of the Point) into MySQL\nfunctions ST_PointFromText and ST_AsText which convert WKT strings to and from the\ninternal format of MySQL."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"When using DQL queries, the ",Object(o.b)("inlineCode",{parentName:"p"},"convertToJSValueSQL")," and ",Object(o.b)("inlineCode",{parentName:"p"},"convertToDatabaseValueSQL")," methods\nonly apply to identification variables and path expressions in SELECT clauses. Expressions\nin WHERE clauses are not wrapped!")),Object(o.b)("h2",{id:"types-provided-by-mikroorm"},"Types provided by MikroORM"),Object(o.b)("p",null,"There are few types provided by MikroORM. All of them aim to provide similar\nexperience among all the drivers, even if the particular feature is not supported\nout of box by the driver."),Object(o.b)("h3",{id:"arraytype"},"ArrayType"),Object(o.b)("p",null,"In PostgreSQL and MongoDB, it uses native arrays, otherwise it concatenates the\nvalues into string separated by commas. This means that you can't use values that\ncontain comma with the ",Object(o.b)("inlineCode",{parentName:"p"},"ArrayType")," (but you can create custom array type that will\nhandle this case, e.g. by using different separator)."),Object(o.b)("p",null,"By default array of strings is returned from the type. You can also have arrays\nof numbers or other data types - to do so, you will need to implement custom\n",Object(o.b)("inlineCode",{parentName:"p"},"hydrate")," method that is used for converting the array values to the right type."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"ArrayType")," will be used automatically if ",Object(o.b)("inlineCode",{parentName:"p"},"type")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"array")," (default behaviour\nof reflect-metadata) or ",Object(o.b)("inlineCode",{parentName:"p"},"string[]")," or ",Object(o.b)("inlineCode",{parentName:"p"},"number[]")," (either manually or via ts-morph).\nIn case of ",Object(o.b)("inlineCode",{parentName:"p"},"number[]")," it will automatically handle the conversion to numbers.\nThis means that the following examples would both have the ",Object(o.b)("inlineCode",{parentName:"p"},"ArrayType")," used\nautomatically (but with reflect-metadata we would have a string array for both\nunless we specify the type manually as `type: 'number[]')")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"@Property({ type: ArrayType, nullable: true })\nstringArray?: string[];\n\n@Property({ type: new ArrayType(i => +i), nullable: true })\nnumericArray?: number[];\n")),Object(o.b)("h3",{id:"biginttype"},"BigIntType"),Object(o.b)("p",null,"You can use ",Object(o.b)("inlineCode",{parentName:"p"},"BigIntType")," to support ",Object(o.b)("inlineCode",{parentName:"p"},"bigint"),"s. By default, it will represent the\nvalue as a ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"@PrimaryKey({ type: BigIntType })\nid: string;\n")),Object(o.b)("h3",{id:"blobtype"},"BlobType"),Object(o.b)("p",null,"Blob type can be used to store binary data in the database."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"BlobType")," will be used automatically if you specify the type hint as ",Object(o.b)("inlineCode",{parentName:"p"},"Buffer"),".\nThis means that the following example should work even without the explicit\n",Object(o.b)("inlineCode",{parentName:"p"},"type: BlobType")," option (with both reflect-metadata and ts-morph providers).")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"@Property({ type: BlobType, nullable: true })\nblob?: Buffer;\n")),Object(o.b)("h3",{id:"jsontype"},"JsonType"),Object(o.b)("p",null,"To store objects we can use ",Object(o.b)("inlineCode",{parentName:"p"},"JsonType"),". As some drivers are handling objects\nautomatically and some don't, this type will handle the serialization in a driver\nindependent way (calling ",Object(o.b)("inlineCode",{parentName:"p"},"parse")," and ",Object(o.b)("inlineCode",{parentName:"p"},"stringify")," only when needed)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"@Property({ type: JsonType, nullable: true })\nobject?: { foo: string; bar: number };\n")),Object(o.b)("h3",{id:"datetype"},"DateType"),Object(o.b)("p",null,"To store dates without time information, we can use ",Object(o.b)("inlineCode",{parentName:"p"},"DateType"),". It does use ",Object(o.b)("inlineCode",{parentName:"p"},"date"),"\ncolumn type and maps it to the ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," object."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"@Property({ type: DateType, nullable: true })\nborn?: Date;\n")),Object(o.b)("h3",{id:"timetype"},"TimeType"),Object(o.b)("p",null,"As opposed to the ",Object(o.b)("inlineCode",{parentName:"p"},"DateType"),", to store only the time information, we can use\n",Object(o.b)("inlineCode",{parentName:"p"},"TimeType"),". It will use the ",Object(o.b)("inlineCode",{parentName:"p"},"time")," column type, the runtime type is string."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"@Property({ type: TimeType, nullable: true })\nbornTime?: string;\n")))}c.isMDXComponent=!0}}]);