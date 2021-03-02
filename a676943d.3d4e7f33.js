(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},i=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),i=p(n),m=r,O=i["".concat(l,".").concat(m)]||i[m]||s[m]||c;return n?a.a.createElement(O,u(u({ref:t},o),{},{components:n})):a.a.createElement(O,u({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=m;var u={};for(var b in t)hasOwnProperty.call(t,b)&&(u[b]=t[b]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var o=2;o<c;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(115)),l={slug:"2020/05/04/sass",title:"Sass Source Map",author:"Albert",author_title:"Front End Engineer",author_url:"https://github.com/Albertnotes",author_image_url:"https://avatars.githubusercontent.com/u/57343359?s=460&u=196d3b133abafbd8294ac0cfb8713961291bb1a3&v=4",tags:["sass"]},u={permalink:"/docusaurus-blog/2020/05/04/sass",editUrl:"https://github.com/albertnotes/docusaurus-blog/edit/master/blog/2020-05-04-sass-source.md",source:"@site/blog\\2020-05-04-sass-source.md",description:"\u524d\u8a00",date:"2020-05-04T00:00:00.000Z",tags:[{label:"sass",permalink:"/docusaurus-blog/tags/sass"}],title:"Sass Source Map",readingTime:.49,truncated:!0,prevItem:{title:"\u6578\u5b57\u7d2f\u52a0\u5668",permalink:"/docusaurus-blog/2020/08/22/knowledge"},nextItem:{title:"\u52a0\u5f37\u7a0b\u5f0f\u908f\u8f2fup! - \u865b\u64ec\u78bc",permalink:"/docusaurus-blog/2020/05/01/leetcode"}},b=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u958b\u59cb\u524d\u6ce8\u610f\u4e8b\u9805",id:"\u958b\u59cb\u524d\u6ce8\u610f\u4e8b\u9805",children:[]},{value:"\u540d\u8a5e\u4ecb\u7d39",id:"\u540d\u8a5e\u4ecb\u7d39",children:[]},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[]},{value:"\u5f71\u7247\u4ecb\u7d39",id:"\u5f71\u7247\u4ecb\u7d39",children:[]},{value:"\u5716\u89e3",id:"\u5716\u89e3",children:[]}],o={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),Object(c.b)("p",null,"\u9019\u662f\u4e00\u7bc7\u7b46\u8005\u53c3\u52a0\u516d\u89d2\u5b78\u9662 - \u7db2\u9801\u76f4\u64ad\u5207\u7248\u73ed\u64d4\u4efb\u5fd7\u5de5\n\u64b0\u5beb\u7684 Sass Source Map \u610f\u7fa9"),Object(c.b)("h2",{id:"\u958b\u59cb\u524d\u6ce8\u610f\u4e8b\u9805"},"\u958b\u59cb\u524d\u6ce8\u610f\u4e8b\u9805"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Live Sass Compiler \u9810\u8a2d\u7522\u751f Source Map \u662f\u6253\u958b\u7684")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://i.imgur.com/Iv9vK9P.png",alt:null})),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8ab2\u7a0b\u6240\u63d0\u4f9b\u7684 Gulp \u6709\u5f15\u5165 Source Map \u5957\u4ef6")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://i.imgur.com/HGCvO8c.png",alt:null})),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4f7f\u7528 Gulp \u4e0d\u80fd\u7528 Sass \u5beb\u6cd5\u54e6\uff0c\u7de8\u8b6f\u526f\u6a94\u540d\u4e26\u4e0d\u5305\u542b ",Object(c.b)("inlineCode",{parentName:"p"},".sass"))),Object(c.b)("p",null,"\u4ee5\u4e0a\u6ce8\u610f\u4e8b\u9805\uff0c\u4e0d\u7528\u8a2d\u5b9a\n\u50c5\u544a\u77e5\u6211\u5011\u63d0\u4f9b\u7684\u7de8\u8b6f\u65b9\u5f0f\u6709\u63d0\u4f9b Source Maps"),Object(c.b)("h2",{id:"\u540d\u8a5e\u4ecb\u7d39"},"\u540d\u8a5e\u4ecb\u7d39"),Object(c.b)("p",null,'Source Map \u7ffb\u8b6f\u53ef\u4ee5\u7a31\u70ba "\u4f86\u6e90\u5730\u5716"\uff0c\u4e5f\u5c31\u662f\u5b83\u7684\u7a0b\u5f0f\u78bc\u4f86\u6e90\u662f\u5f9e\u54ea\u88e1\u4f86\u7684\uff0c\u529f\u7528\u662f\u63d0\u4f9b\u7de8\u8b6f\u5f8c\u7684 css \u6a94\u6848\uff0c\u627e\u5230\u7de8\u8b6f\u524d\u7684\u4f4d\u7f6e\u3002'),Object(c.b)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://i.imgur.com/5Ki8CAD.png",alt:null})),Object(c.b)("p",null,"\u7531\u4e0a\u5716\u53ef\u4ee5\u767c\u73fe\u4ee5\u4e0b\u5169\u9ede"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7de8\u8b6f\u5f8c\u7684\u6a94\u6848\uff0c\u6700\u5f8c\u4e00\u884c\u6709\u4ee5\u4e0b\u7684\u8a3b\u89e3")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"/*# sourceMappingURL=all.min.css.map */\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u8cc7\u6599\u593e\u88e1\u51fa\u73fe all.min.css.map \u6a94\u6848\uff0c\u9019\u500b\u5c31\u662f\u5c0d\u61c9\u4e0a\u65b9\u7684\u8a3b\u89e3")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4ee5\u4e0a\u6703\u662f\u81ea\u52d5\u7522\u751f\uff0c\u8a3b\u89e3\u5225\u522a\u3001\u5169\u96bb\u6a94\u6848\u4e0d\u8981\u5206\u958b\u7684\u8a71\uff0cSource map \u7684\u529f\u80fd\u5c31\u9084\u5728\u3002")),Object(c.b)("h2",{id:"\u5f71\u7247\u4ecb\u7d39"},"\u5f71\u7247\u4ecb\u7d39"),Object(c.b)("p",null,"\u63a5\u4e0b\u4f86\u662f\u4ee5\u4fee\u6539 CSS \u53bb\u4ecb\u7d39 ",Object(c.b)("inlineCode",{parentName:"p"},"map")," \u6a94\u6848\u7684\u6548\u679c\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8acb\u6ce8\u610f\u6709\u8072\u97f3\ud83d\udd08")),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://youtu.be/bSAK2MFNcTY"},"\u5f71\u7247\u9023\u7d50")),Object(c.b)("h2",{id:"\u5716\u89e3"},"\u5716\u89e3"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u5716\u793a\u662f\u5f71\u7247\u7e3d\u7d50")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528 Source map \u7684\u8a71\uff0cChrome \u6a94\u6848\u6307\u5411",Object(c.b)("strong",{parentName:"li"},"\u7de8\u8b6f\u524d"),"\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},".scss"))),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://i.imgur.com/1rTfOjN.png",alt:null})),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u672a\u4f7f\u7528 Source map \u7684\u8a71\uff0cChrome \u6a94\u6848\u6307\u5411",Object(c.b)("strong",{parentName:"li"},"\u7de8\u8b6f\u5f8c"),"\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},".css"))),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://i.imgur.com/RHt0pCZ.jpg",alt:null})))}p.isMDXComponent=!0}}]);