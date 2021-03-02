(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{115:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||c;return r?a.a.createElement(m,l(l({ref:t},i),{},{components:r})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<c;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(115)),o={slug:"2020/08/22/knowledge",title:"\u6578\u5b57\u7d2f\u52a0\u5668",author:"Albert",author_title:"Front End Engineer",author_url:"https://github.com/Albertnotes",author_image_url:"https://avatars.githubusercontent.com/u/57343359?s=460&u=196d3b133abafbd8294ac0cfb8713961291bb1a3&v=4",tags:["knowledge"]},l={permalink:"/docusaurus-blog/2020/08/22/knowledge",editUrl:"https://github.com/albertnotes/docusaurus-blog/edit/master/blog/blog/2020-08-22-knowledge.md",source:"@site/blog\\2020-08-22-knowledge.md",description:"\u524d\u8a00",date:"2020-08-22T00:00:00.000Z",tags:[{label:"knowledge",permalink:"/docusaurus-blog/tags/knowledge"}],title:"\u6578\u5b57\u7d2f\u52a0\u5668",readingTime:.385,truncated:!0,prevItem:{title:"Fisher-Yates \u6f14\u7b97\u6cd5",permalink:"/docusaurus-blog/2020/08/23/knowledge"},nextItem:{title:"Sass Source Map",permalink:"/docusaurus-blog/2020/05/04/sass"}},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u6578\u5b57\u7d2f\u52a0\u5668(\u652f\u63f4\u8907\u6578\u4ee5\u4e0a)",id:"\u6578\u5b57\u7d2f\u52a0\u5668\u652f\u63f4\u8907\u6578\u4ee5\u4e0a",children:[{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",children:[]},{value:"\u89e3\u8aaa",id:"\u89e3\u8aaa",children:[]}]}],i={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),Object(c.b)("p",null,"\u7d00\u9304\u7576\u5929\u958b\u555f 30 Seconds of Knowledge \u7684\u77e5\u8b58"),Object(c.b)("h2",{id:"\u6578\u5b57\u7d2f\u52a0\u5668\u652f\u63f4\u8907\u6578\u4ee5\u4e0a"},"\u6578\u5b57\u7d2f\u52a0\u5668(\u652f\u63f4\u8907\u6578\u4ee5\u4e0a)"),Object(c.b)("h3",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},"const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);\n\nsum(1, 2, 3, 4); // 10\nsum(...[1, 2, 3, 4]); // 10\n")),Object(c.b)("h3",{id:"\u89e3\u8aaa"},"\u89e3\u8aaa"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"...arr  // \u63a1\u7528\u51fd\u5f0f\u7684\u5176\u9918\u53c3\u6578\uff0c\u51fd\u5f0f\u5167\u6703\u662f\u4ee5\u9663\u5217\u63a5\u6536\u3002\n[...arr] // \u5176\u9918\u53c3\u6578\u7684\u9663\u5217\u900f\u904e\u89e3\u69cb\u70ba\u4e00\u500b\u65b0\u9663\u5217\n")),Object(c.b)("p",null,"\u8dd1 ",Object(c.b)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"},"reduce \u7d2f\u52a0\u5668")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"reduce((acc, val) => acc + val, 0);\n// acc \u662f accumulator \u4e0a\u4e00\u6b21\u547c\u53eb\u7d2f\u52a0\u7684\u7e3d\u6578\u503c\n// val \u662f currentValue \u7576\u524d\u8981\u7d2f\u52a0\u7684\u6578\u503c\n// \u5f8c\u9762\u50b3\u5165 0 \u70ba initialValue \u7d2f\u52a0\u5668\u521d\u59cb\u503c\n")))}p.isMDXComponent=!0}}]);