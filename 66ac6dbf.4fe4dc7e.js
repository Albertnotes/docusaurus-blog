(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{116:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return d}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function b(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),i=function(e){var r=a.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=i(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},s=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),p=i(n),s=t,d=p["".concat(l,".").concat(s)]||p[s]||m[s]||o;return n?a.a.createElement(d,c(c({ref:r},u),{},{components:n})):a.a.createElement(d,c({ref:r},u))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=s;var c={};for(var b in r)hasOwnProperty.call(r,b)&&(c[b]=r[b]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},87:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return b})),n.d(r,"default",(function(){return i}));var t=n(3),a=n(7),o=(n(0),n(116)),l={slug:"2020/08/23/knowledge",title:"Fisher-Yates \u6f14\u7b97\u6cd5",author:"Albert",author_title:"Front End Engineer",author_url:"https://github.com/Albertnotes",author_image_url:"https://avatars.githubusercontent.com/u/57343359?s=460&u=196d3b133abafbd8294ac0cfb8713961291bb1a3&v=4",tags:["knowledge"]},c={permalink:"/docusaurus-blog/2020/08/23/knowledge",editUrl:"https://github.com/albertnotes/docusaurus-blog/edit/master/blog/2020-08-23-knowledge.md",source:"@site/blog\\2020-08-23-knowledge.md",description:"\u524d\u8a00",date:"2020-08-23T00:00:00.000Z",tags:[{label:"knowledge",permalink:"/docusaurus-blog/tags/knowledge"}],title:"Fisher-Yates \u6f14\u7b97\u6cd5",readingTime:1.485,truncated:!0,prevItem:{title:"\u586b\u5145\u5b57\u4e32\u7b26\u3001\u9589\u5305",permalink:"/docusaurus-blog/2020/08/24/knowledge"},nextItem:{title:"\u6578\u5b57\u7d2f\u52a0\u5668",permalink:"/docusaurus-blog/2020/08/22/knowledge"}},b=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"Fisher-Yates \u6f14\u7b97\u6cd5\u5be6\u4f5c",id:"fisher-yates-\u6f14\u7b97\u6cd5\u5be6\u4f5c",children:[{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",children:[]},{value:"\u89e3\u8aaa",id:"\u89e3\u8aaa",children:[]}]}],u={toc:b};function i(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),Object(o.b)("p",null,"\u7d00\u9304\u7576\u5929\u958b\u555f 30 Seconds of Knowledge \u7684\u77e5\u8b58"),Object(o.b)("h2",{id:"fisher-yates-\u6f14\u7b97\u6cd5\u5be6\u4f5c"},"Fisher-Yates \u6f14\u7b97\u6cd5\u5be6\u4f5c"),Object(o.b)("p",null,"\u6982\u5ff5\u70ba\u53d6\u6700\u5f8c\u4e00\u500b\u5143\u7d20\u548c\u5b83\u524d\u65b9\u7684\u96a8\u6a5f\u5143\u7d20\u4ea4\u63db\u4f4d\u7f6e\uff0c\n\u63a5\u4e0b\u4f86\u5c07\u5012\u6578\u7b2c\u4e8c\u500b\u5143\u7d20\uff0c\u548c\u5b83\u524d\u65b9\u7684\u96a8\u6a5f\u5143\u7d20\u518d\u4ea4\u63db\u4f4d\u7f6e\uff0c\n\u4ee5\u6b64\u985e\u63a8......"),Object(o.b)("h3",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const shuffle = ([...arr]) => {\n    let m = arr.length;\n    while (m) {\n        const i = Math.floor(Math.random() * m--);\n        [arr[m], arr[i]] = [arr[i], arr[m]];\n    }\n    return arr;\n};\n\nconst foo = [1, 2, 3];\nshuffle(foo); // [2, 3, 1], foo = [1, 2, 3]\n")),Object(o.b)("h3",{id:"\u89e3\u8aaa"},"\u89e3\u8aaa"),Object(o.b)("p",null,"\u91cd\u9ede"),Object(o.b)("p",null,"\u89e3\u69cb\u8ce6\u503c (Destructuring assignment)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"\u4e0d\u4f7f\u7528 arr \u6539\u70ba ","[...arr]"," \u907f\u514d\u76f4\u63a5\u6539\u8b8a\u51fd\u5f0f\u50b3\u5165\u7684\u9663\u5217\u8b8a\u6578")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"[arr[m], arr[i]] = [arr[i], arr[m]]")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"\u8b8a\u6578\u4ea4\u63db\uff0c\u900f\u904e\u89e3\u69cb\u6307\u6d3e\u5f0f\u9032\u884c\u9663\u5217\u7d22\u5f15\u7684\u66ff\u63db")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"m--")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"\u7b97\u8853\u904b\u7b97\u5b50: \u6ce8\u610f\u9019\u500b\u662f\u905e\u6e1b\u524d\u56de\u50b3 m \u503c")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"--m")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"\u7b97\u8853\u904b\u7b97\u5b50: \u6ce8\u610f\u9019\u500b\u8207\u4e0a\u9762\u4e0d\u540c\uff0c\u662f\u628a m \u905e\u6e1b\u5f8c\u518d\u56de\u50b3")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Math.random()")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"\u7522\u751f 0 (\u5305\u542b 0 ) \u548c 1 (\u4e0d\u5305\u542b 1) \u4e4b\u9593\u7684\u6d6e\u9ede\u578b\u507d\u96a8\u6a5f\u6578\u5b57")),Object(o.b)("p",null,"\u4ee5\u4e0b\u662f ",Object(o.b)("inlineCode",{parentName:"p"},"Math.floor(Math.random() * m--)")," \u7684\u6982\u5ff5"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"// \u6211\u5011\u5148\u8a66\u8457\u9019\u6a23\n// \u4f8b\u5982\u7522\u751f: 0.99999999999\nconsole.log(Math.random());\n// \u7136\u5f8c\u63a5\u4e0a m-- \u5728\u9019\u908a m \u662f\u905e\u6e1b\u524d\u56de\u50b3 m \u503c\n// \u6240\u4ee5 let m = arr.length; \u6703\u662f 3\n// \u4f46\u662f 0.99999999999 * 3 = 2.99999...\n// \u63a5\u8457\u4f7f\u7528 Math.floor \u56de\u50b3\u5c0f\u65bc\u7b49\u65bc\u6240\u7d66\u6578\u5b57\u7684\u6700\u5927\u6574\u6578\n// \u5c31\u6703\u8fd4\u56de 2\uff0c\u4f46\u662f\u9019\u500b\u6703\u8207\u7576\u524d arr[m] \u7684\u6700\u5f8c\u4e00\u500b\u7d22\u5f15\u503c\u76f8\u540c\n// \u6240\u4ee5\u7167\u8457\u4ee5\u4e0b\u7684\u65b9\u5f0f\u8dd1\nconst i = Math.floor(Math.random() * m--);\n[arr[m], arr[i]] = [arr[i], arr[m]];\n// \u6703\u6709\u6a5f\u7387\u662f [arr[2], arr[2]] = [arr[2], arr[2]]\n// \u9019\u500b\u5c31\u4e0d\u662f\u4ea4\u63db\u4f4d\u7f6e\u7684\u6982\u5ff5\uff0c\u6240\u4ee5\u53ef\u4ee5\u628a m-- \u6539\u70ba --m\n// \u6700\u5f8c\u628a\u9663\u5217\u56de\u50b3\nreturn arr;\n")),Object(o.b)("p",null,"\u9644\u4e0a\u7a0b\u5f0f\u8a3b\u89e3"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const shuffle = ([...arr]) => {\n    let m = arr.length;\n    while (m) {\n        const i = Math.floor(Math.random() * --m);\n        console.log('\u4e82\u6578:', i, '\u5c3e\u6578', m);\n        [arr[m], arr[i]] = [arr[i], arr[m]];\n        console.log('\u5df2\u66ff\u63db', arr);\n    }\n    return arr;\n};\n\nconst foo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconsole.log('\u4e82\u6578\u9663\u5217:', shuffle(foo));\nconsole.log('\u539f\u59cb\u9663\u5217:', foo);\n")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/UFvp4zc.png",alt:null})),Object(o.b)("p",null,"\u539f\u59cb\u9663\u5217"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n")),Object(o.b)("p",null,"\u4e82\u6578: 8 \u5c3e\u6578: 9\uff0c\u7b49\u65bc\u628a\u9663\u5217\u7d22\u5f15\u503c arr","[9]"," \u8207 arr","[8]"," \u4ea4\u63db\u4f4d\u7f6e"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[1, 2, 3, 4, 5, 6, 7, 8, 10, 9]\n")),Object(o.b)("p",null,"\u63a5\u8457\u7e7c\u7e8c\u8dd1 while"),Object(o.b)("p",null,"\u4e82\u6578: 5 \u5c3e\u6578: 8\uff0c\u7b49\u65bc\u628a\u9663\u5217\u7d22\u5f15\u503c arr","[8]"," \u8207 arr","[5]"," \u4ea4\u63db\u4f4d\u7f6e\n\u53d6\u4e0a\u6b21\u7684\u7d50\u679c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[1, 2, 3, 4, 5, 10, 7, 8, 6, 9]\n")),Object(o.b)("p",null,"\u63a5\u8457\u7e7c\u7e8c\u8dd1 while"),Object(o.b)("p",null,"\u4e82\u6578: 4 \u5c3e\u6578: 7\uff0c\u7b49\u65bc\u628a\u9663\u5217\u7d22\u5f15\u503c arr","[7]"," \u8207 arr","[4]"," \u4ea4\u63db\u4f4d\u7f6e\n\u53d6\u4e0a\u6b21\u7684\u7d50\u679c\uff0c\u518d\u9032\u884c\u4e00\u6b21\u4ea4\u63db\uff0c\u4ee5\u6b64\u985e\u63a8\u9054\u5230\u4e82\u6578\u6d17\u724c\u7684\u6548\u679c..."))}i.isMDXComponent=!0}}]);