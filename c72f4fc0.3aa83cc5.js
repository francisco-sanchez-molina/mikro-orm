(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{629:function(e,o,n){"use strict";n.r(o),n.d(o,"frontMatter",(function(){return r})),n.d(o,"metadata",(function(){return l})),n.d(o,"rightToc",(function(){return c})),n.d(o,"default",(function(){return b}));var t=n(1),i=n(6),a=(n(0),n(804)),r={title:"Collections"},l={unversionedId:"collections",id:"version-4.2/collections",isDocsHomePage:!1,title:"Collections",description:"OneToMany and ManyToMany collections are stored in a Collection wrapper. It implements",source:"@site/versioned_docs/version-4.2/collections.md",slug:"/collections",permalink:"/docs/collections",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/collections.md",version:"4.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1603660940,sidebar:"version-4.2/docs",previous:{title:"Entity References",permalink:"/docs/entity-references"},next:{title:"Using EntityRepository instead of EntityManager",permalink:"/docs/repositories"}},c=[{value:"OneToMany Collections",id:"onetomany-collections",children:[]},{value:"ManyToMany Collections",id:"manytomany-collections",children:[{value:"Unidirectional",id:"unidirectional",children:[]},{value:"Bidirectional",id:"bidirectional",children:[]},{value:"Forcing fixed order of collection items",id:"forcing-fixed-order-of-collection-items",children:[]}]},{value:"Propagation of Collection&#39;s add() and remove() operations",id:"propagation-of-collections-add-and-remove-operations",children:[]},{value:"Filtering and ordering of collection items",id:"filtering-and-ordering-of-collection-items",children:[]}],s={rightToc:c};function b(e){var o=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},s,n,{components:o,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"OneToMany")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ManyToMany")," collections are stored in a ",Object(a.b)("inlineCode",{parentName:"p"},"Collection")," wrapper. It implements\niterator so you can use ",Object(a.b)("inlineCode",{parentName:"p"},"for of")," loop to iterate through it. "),Object(a.b)("p",null,"Another way to access collection items is to use bracket syntax like when you access array items.\nKeep in mind that this approach will not check if the collection is initialed, while using ",Object(a.b)("inlineCode",{parentName:"p"},"get"),"\nmethod will throw error in this case."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note that array access in ",Object(a.b)("inlineCode",{parentName:"p"},"Collection")," is available only for reading already loaded items, you\ncannot add new items to ",Object(a.b)("inlineCode",{parentName:"p"},"Collection")," this way. ")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"const author = orm.em.findOne(Author, '...', ['books']); // populating books collection\n\n// or we could lazy load books collection later via `init()` method\nawait author.books.init();\n\nfor (const book of author.books) {\n  console.log(book.title); // initialized\n  console.log(book.author.isInitialized()); // true\n  console.log(book.author.id);\n  console.log(book.author.name); // Jon Snow\n  console.log(book.publisher); // just reference\n  console.log(book.publisher.isInitialized()); // false\n  console.log(book.publisher.id);\n  console.log(book.publisher.name); // undefined\n}\n\n// collection needs to be initialized before you can work with it\nauthor.books.add(book);\nconsole.log(author.books.contains(book)); // true\nauthor.books.remove(book);\nconsole.log(author.books.contains(book)); // false\nauthor.books.add(book);\nconsole.log(author.books.count()); // 1\nauthor.books.removeAll();\nconsole.log(author.books.contains(book)); // false\nconsole.log(author.books.count()); // 0\nconsole.log(author.books.getItems()); // Book[]\nconsole.log(author.books.getIdentifiers()); // array of string | number\nconsole.log(author.books.getIdentifiers('_id')); // array of ObjectId\n\n// array access works as well\nconsole.log(author.books[1]); // Book\nconsole.log(author.books[12345]); // undefined, even if the collection is not initialized\n\nconst author = orm.em.findOne(Author, '...'); // books collection has not been populated\nconsole.log(author.books.getItems()); // throws because the collection has not been initialized\n// initialize collection if not already loaded and return its items as array\nconsole.log(await author.books.loadItems()); // Book[]\n")),Object(a.b)("h2",{id:"onetomany-collections"},"OneToMany Collections"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"OneToMany")," collections are inverse side of ",Object(a.b)("inlineCode",{parentName:"p"},"ManyToOne")," references, to which they need to point via ",Object(a.b)("inlineCode",{parentName:"p"},"fk")," attribute:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @ManyToOne()\n  author!: Author;\n\n}\n\n@Entity()\nexport class Author {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @OneToMany(() => Book, book => book.author)\n  books1 = new Collection<Book>(this);\n\n  // or via options object\n  @OneToMany({ entity: () => Book, mappedBy: 'author' })\n  books2 = new Collection<Book>(this);\n\n}\n")),Object(a.b)("h2",{id:"manytomany-collections"},"ManyToMany Collections"),Object(a.b)("p",null,"For ManyToMany, SQL drivers use pivot table that holds reference to both entities. "),Object(a.b)("p",null,"As opposed to them, with MongoDB we do not need to have join tables for ",Object(a.b)("inlineCode",{parentName:"p"},"ManyToMany"),"\nrelations. All references are stored as an array of ",Object(a.b)("inlineCode",{parentName:"p"},"ObjectId"),"s on owning entity. "),Object(a.b)("h3",{id:"unidirectional"},"Unidirectional"),Object(a.b)("p",null,"Unidirectional ",Object(a.b)("inlineCode",{parentName:"p"},"ManyToMany")," relations are defined only on one side, if you define only ",Object(a.b)("inlineCode",{parentName:"p"},"entity"),"\nattribute, then it will be considered the owning side:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"@ManyToMany(() => Book)\nbooks1 = new Collection<Book>(this);\n\n// or mark it as owner explicitly via options object\n@ManyToMany({ entity: () => Book, owner: true })\nbooks2 = new Collection<Book>(this);\n")),Object(a.b)("h3",{id:"bidirectional"},"Bidirectional"),Object(a.b)("p",null,"Bidirectional ",Object(a.b)("inlineCode",{parentName:"p"},"ManyToMany")," relations are defined on both sides, while one is owning side (where references are store),\nmarked by ",Object(a.b)("inlineCode",{parentName:"p"},"inversedBy")," attribute pointing to the inverse side:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"@ManyToMany(() => BookTag, tag => tag.books, { owner: true })\ntags = new Collection<BookTag>(this);\n\n// or via options object\n@ManyToMany({ entity: () => BookTag, inversedBy: 'books' })\ntags = new Collection<BookTag>(this);\n")),Object(a.b)("p",null,"And on the inversed side we define it with ",Object(a.b)("inlineCode",{parentName:"p"},"mappedBy")," attribute pointing back to the owner:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"@ManyToMany(() => Book, book => book.tags)\nbooks = new Collection<Book>(this);\n\n// or via options object\n@ManyToMany({ entity: () => Book, mappedBy: 'tags' })\nbooks = new Collection<Book>(this);\n")),Object(a.b)("h3",{id:"forcing-fixed-order-of-collection-items"},"Forcing fixed order of collection items"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Since v3 many to many collections does not require having auto increment primary key, that\nwas used to ensure fixed order of collection items.")),Object(a.b)("p",null,"To preserve fixed order of collections, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"fixedOrder: true")," attribute, which will\nstart ordering by ",Object(a.b)("inlineCode",{parentName:"p"},"id")," column. Schema generator will convert the pivot table to have auto increment\nprimary key ",Object(a.b)("inlineCode",{parentName:"p"},"id"),". You can also change the order column name via ",Object(a.b)("inlineCode",{parentName:"p"},"fixedOrderColumn: 'order'"),". "),Object(a.b)("p",null,"You can also specify default ordering via ",Object(a.b)("inlineCode",{parentName:"p"},"orderBy: { ... }")," attribute. This will be used when\nyou fully populate the collection including its items, as it orders by the referenced entity\nproperties instead of pivot table columns (which ",Object(a.b)("inlineCode",{parentName:"p"},"fixedOrderColumn")," is). On the other hand,\n",Object(a.b)("inlineCode",{parentName:"p"},"fixedOrder")," is used to maintain the insert order of items instead of ordering by some property. "),Object(a.b)("h2",{id:"propagation-of-collections-add-and-remove-operations"},"Propagation of Collection's add() and remove() operations"),Object(a.b)("p",null,"When you use one of ",Object(a.b)("inlineCode",{parentName:"p"},"Collection.add()")," method, the item is added to given collection,\nand this action is also propagated to its counterpart. "),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"// one to many\nconst author = new Author(...);\nconst book = new Book(...);\n\nauthor.books.add(book);\nconsole.log(book.author); // author will be set thanks to the propagation\n")),Object(a.b)("p",null,"For M:N this works in both ways, either from owning side, or from inverse side. "),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"// many to many works both from owning side and from inverse side\nconst book = new Book(...);\nconst tag = new BookTag(...);\n\nbook.tags.add(tag);\nconsole.log(tag.books.contains(book)); // true\n\ntag.books.add(book);\nconsole.log(book.tags.contains(tag)); // true\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Collections on both sides have to be initialized, otherwise propagation won't work.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Although this propagation works also for M:N inverse side, you should always use owning\nside to manipulate the collection.")),Object(a.b)("p",null,"Same applies for ",Object(a.b)("inlineCode",{parentName:"p"},"Collection.remove()"),"."),Object(a.b)("h2",{id:"filtering-and-ordering-of-collection-items"},"Filtering and ordering of collection items"),Object(a.b)("p",null,"When initializing collection items via ",Object(a.b)("inlineCode",{parentName:"p"},"collection.init()"),", you can filter the collection\nas well as order its items:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"await book.tags.init({ where: { active: true }, orderBy: { name: QueryOrder.DESC } });\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You should never modify partially loaded collection.")))}b.isMDXComponent=!0},804:function(e,o,n){"use strict";n.d(o,"a",(function(){return d})),n.d(o,"b",(function(){return m}));var t=n(0),i=n.n(t);function a(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){a(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function c(e,o){if(null==e)return{};var n,t,i=function(e,o){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var o=i.a.useContext(s),n=o;return e&&(n="function"==typeof e?e(o):l(l({},o),e)),n},d=function(e){var o=b(e.components);return i.a.createElement(s.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return i.a.createElement(i.a.Fragment,{},o)}},u=i.a.forwardRef((function(e,o){var n=e.components,t=e.mdxType,a=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=t,m=d["".concat(r,".").concat(u)]||d[u]||p[u]||a;return n?i.a.createElement(m,l(l({ref:o},s),{},{components:n})):i.a.createElement(m,l({ref:o},s))}));function m(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var c in o)hasOwnProperty.call(o,c)&&(l[c]=o[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);