(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,u=s["".concat(i,".").concat(m)]||s[m]||d[m]||c;return n?r.a.createElement(u,b(b({ref:t},l),{},{components:n})):r.a.createElement(u,b({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return l}));var a=n(3),r=(n(0),n(116));const c={id:"webpack-part1",title:"Webpack \u57fa\u790e",sidebar_label:"\u57fa\u790e",slug:"/"},i={unversionedId:"webpack/webpack-part1",id:"webpack/webpack-part1",isDocsHomePage:!1,title:"Webpack \u57fa\u790e",description:"\u6587\u4ef6//webpack.js.org/",source:"@site/docs\\webpack\\part-1.md",slug:"/",permalink:"/docusaurus-blog/docs/",editUrl:"https://github.com/albertnotes/docusaurus-blog/edit/master/docs/webpack/part-1.md",version:"current",lastUpdatedBy:"Albert",lastUpdatedAt:1616002583,sidebar_label:"\u57fa\u790e",sidebar:"someSidebar"},b=[{value:"\u74b0\u5883",id:"\u74b0\u5883",children:[{value:"nvm \u5e38\u7528\u6307\u4ee4",id:"nvm-\u5e38\u7528\u6307\u4ee4",children:[]}]},{value:"\u958b\u59cb\u524d\u5957\u4ef6",id:"\u958b\u59cb\u524d\u5957\u4ef6",children:[]},{value:"\u6982\u5ff5",id:"\u6982\u5ff5",children:[]},{value:"\u5be6\u4f5c",id:"\u5be6\u4f5c",children:[{value:"\u8d77\u624b\u5f0f",id:"\u8d77\u624b\u5f0f",children:[]},{value:"\u751f\u7522\u3001\u958b\u767c\u6a21\u5f0f",id:"\u751f\u7522\u3001\u958b\u767c\u6a21\u5f0f",children:[]},{value:"\u8907\u6578 entry",id:"\u8907\u6578-entry",children:[]}]},{value:"\u5957\u4ef6\u5340",id:"\u5957\u4ef6\u5340",children:[{value:"style-loader\u3001css-loader",id:"style-loader\u3001css-loader",children:[]},{value:"extract-text-webpack-plugin",id:"extract-text-webpack-plugin",children:[]},{value:"mini-css-extract-plugin",id:"mini-css-extract-plugin",children:[]}]},{value:"Reference",id:"reference",children:[]}],o={toc:b};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u6587\u4ef6 : ",Object(r.b)("a",{parentName:"p",href:"https://webpack.js.org/"},"https://webpack.js.org/"),"\nWebpack \u524d\u7aef\u6253\u5305\u5de5\u5177(\u63d0\u4f9b\u6a21\u7d44\u5316\u958b\u767c\u6a21\u5f0f)"),Object(r.b)("h2",{id:"\u74b0\u5883"},"\u74b0\u5883"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/coreybutler/nvm-windows/releases"},"nvm \u5de5\u5177 (nodejs \u7248\u63a7\u5de5\u5177)")),Object(r.b)("li",{parentName:"ol"},"npm \u5957\u4ef6\u7ba1\u7406\u5de5\u5177")),Object(r.b)("h3",{id:"nvm-\u5e38\u7528\u6307\u4ee4"},"nvm \u5e38\u7528\u6307\u4ee4"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"nvm install <version>\nnvm list\nnvm uninstall <version>\nnvm version\n")),Object(r.b)("h2",{id:"\u958b\u59cb\u524d\u5957\u4ef6"},"\u958b\u59cb\u524d\u5957\u4ef6"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"npm install webpack webpack-cli --save-dev\n")),Object(r.b)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),Object(r.b)("p",null,"webpack \u900f\u904e\u7de8\u5beb\u8a2d\u5b9a\u6a94\uff0c\u53bb\u8a2d\u5b9a\u4e00\u5957\u81ea\u52d5\u5316\u6307\u4ee4\u7684\u5de5\u5177\uff0c\u6838\u5fc3\u6982\u5ff5\u70ba\u6ce8\u5165\u3002\n\u8a2d\u5b9a\u6a94\u6703\u6709 entry \u7684\u5c6c\u6027\uff0c\u8868\u793a\u544a\u77e5 webpack \u9032\u5165\u9ede\u5f9e\u54ea\u4e00\u96bb js \u958b\u59cb\uff0c\u4e26\u4e14\u900f\u904e\u9019\u652f\u6a94\u6848\u7684\u76f8\u95dc import \u627e\u5230\u5176\u4ed6 js\uff0c\n\u85c9\u7531 Webpack \u5f15\u5165\u7684\u76f8\u95dc Preprocess \u9032\u884c\u7de8\u8b6f\uff0c\u63a5\u8457\u53ef\u4ee5\u8a2d\u5b9a output \u7684\u5c6c\u6027\uff0c\u5f97\u5230\u7de8\u8b6f\u5f8c\u7684\u6a94\u6848\u3002"),Object(r.b)("h2",{id:"\u5be6\u4f5c"},"\u5be6\u4f5c"),Object(r.b)("h3",{id:"\u8d77\u624b\u5f0f"},"\u8d77\u624b\u5f0f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"webpack.config.js")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n\nmodule.exports = {\n    entry: './src/index.js',\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'bundle.js',\n    },\n};\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"path.resolve()")," \u662f nodejs \u76f8\u5c0d\u8def\u5f91 \u8f49\u70ba\u7d55\u5c0d\u8def\u5f91\u7684\u65b9\u5f0f\u3002"),Object(r.b)("li",{parentName:"ul"},"_","_","dirname \u662f nodejs \u74b0\u5883\u8b8a\u6578\uff0c\u6307\u7576\u524d\u57f7\u884c\u6587\u4ef6\u8cc7\u6599\u593e\u7684\u5b8c\u6574\u8def\u5f91\u3002"),Object(r.b)("li",{parentName:"ul"},"server \u74b0\u5883\u7684\u4e0d\u540c\uff0c\u4f7f\u7528\u76f8\u5c0d\u8def\u5f91\u53ef\u80fd\u6703\u6709\u8cc7\u6599\u593e\u5c64\u7d1a\u4e0d\u540c\u7684\u554f\u984c\uff0c\u6545\u76e1\u91cf\u4f7f\u7528\u7d55\u5c0d\u8def\u5f91\u3002")))),Object(r.b)("h3",{id:"\u751f\u7522\u3001\u958b\u767c\u6a21\u5f0f"},"\u751f\u7522\u3001\u958b\u767c\u6a21\u5f0f"),Object(r.b)("p",null,"\u95dc\u65bc ",Object(r.b)("a",{parentName:"p",href:"https://webpack.js.org/configuration/mode/#root"},"mode"),"\n\u70ba webpack \u914d\u7f6e\u6a21\u5f0f\uff0c\u53ef\u4ee5\u63d0\u5347\u57f7\u884c\u6548\u80fd\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"development \u958b\u767c\u6a21\u5f0f => \u6703\u4ee5\u7de8\u8b6f\u6548\u80fd\u70ba\u8003\u91cf\u4e0d\u9032\u884c\u58d3\u7e2e webpack --mode development"),Object(r.b)("li",{parentName:"ul"},"production \u751f\u7522\u6a21\u5f0f => \u6703\u76e1\u53ef\u80fd\u7684\u58d3\u7e2e\u7a0b\u5f0f\u78bc webpack --mode production")),Object(r.b)("p",null,"\u4e0a\u8ff0\u662f\u5728\u6307\u4ee4\u57f7\u884c\u6307\u5b9a\u6a21\u5f0f\uff0c\u53e6\u5916\u4e5f\u53ef\u4ee5\u5728\u8a2d\u5b9a\u6a94\u64b0\u5beb\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n\nmodule.exports = {\n    mode: 'development'\n    entry: './src/index.js',\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'bundle.js',\n    },\n};\n")),Object(r.b)("p",null,"\u4f46\u662f\u6703\u6709\u5beb\u6b7b\u7684\u554f\u984c\uff0c\u53ef\u4ee5\u5229\u7528 nodejs \u7684\u74b0\u5883\u8b8a\u6578 ",Object(r.b)("inlineCode",{parentName:"p"},"NODE_ENV=development")," \u628a\u5b83\u5728\u6307\u4ee4\u7684\u524d\u9762"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"NODE_ENV=development webpack")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n\nmodule.exports = {\n    mode: process.env.NODE_ENV\n    entry: './src/index.js',\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'bundle.js',\n    },\n};\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u8de8\u5e73\u53f0\u4e0a windows \u5fc5\u9808\u8981\u5b89\u88dd\u53e6\u5916\u7684\u5957\u4ef6 ",Object(r.b)("inlineCode",{parentName:"p"},"npm install cross-env --save-dev")),Object(r.b)("p",{parentName:"div"},"Ps. Mac \u74b0\u5883\u4e0b\u6703\u81ea\u52d5\u5ffd\u7565\uff0c\u6545\u4e0d\u6703\u6709\u554f\u984c"))),Object(r.b)("p",null,"\u6307\u4ee4\u6539\u5982\u4e0b:",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("inlineCode",{parentName:"p"},"cross-env NODE_ENV=development webpack")),Object(r.b)("h3",{id:"\u8907\u6578-entry"},"\u8907\u6578 entry"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n\nmodule.exports = {\n    mode: process.env.NODE_ENV,\n    context: path.resolve(__dirname, 'src'),\n    entry: {\n        index: './index.js'),\n        bar: './bar.js'),\n    },\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: '[name].bundle.js',\n    },\n};\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\u4e4b\u524d\u63d0\u5230\u7d55\u5c0d\u8def\u5f91\u7684\u7528\u610f\uff0c\u4e0a\u8ff0\u4f7f\u7528 context \u6307\u5b9a entry \u7684\u76ee\u9304\uff0c\u6240\u4ee5\u5f8c\u7e8c\u53ea\u9700\u8981\u7528\u76f8\u5c0d\u8def\u5f91\u6307\u5411\u7576\u524d\u8cc7\u6599\u593e\u5373\u53ef\u3002"),Object(r.b)("li",{parentName:"ul"},"filename \u7684 ","[name]"," \u5206\u5225\u5c0d\u61c9 entry \u7684 key\u3002")))),Object(r.b)("h2",{id:"\u5957\u4ef6\u5340"},"\u5957\u4ef6\u5340"),Object(r.b)("h3",{id:"style-loader\u3001css-loader"},"style-loader\u3001css-loader"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"npm install --save-dev css-loader\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    module: {\n        rules: [\n            {\n                test: /\\.css$/i,\n                use: ['style-loader', 'css-loader'],\n            },\n        ],\n    },\n};\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u8acb\u6ce8\u610f Loader \u985e\u7684\u5957\u4ef6\u662f\u7531\u5f8c\u5f80\u524d\u7684\u57f7\u884c\u9806\u5e8f\n\u8a72\u5957\u4ef6\u53ef\u4ee5\u8b80\u53d6\u7d14 css \u3001\u5247 style-loader \u63d0\u4f9b JS import"))),Object(r.b)("h3",{id:"extract-text-webpack-plugin"},"extract-text-webpack-plugin"),Object(r.b)("p",null,"\u820a\u7248\u5957\u4ef6\uff0c\u50c5\u70ba\u4e86\u672a\u4f86\u53ef\u80fd\u9047\u5230\u6545\u7559\u6a94\u3002"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/webpack-contrib/extract-text-webpack-plugin"},"Github")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u8acb\u6ce8\u610f\u5982\u679c\u8981\u652f\u63f4 webpack 4\nnpm \u9700\u8981\u5b89\u88dd ",Object(r.b)("inlineCode",{parentName:"p"},"npm install --save-dev extract-text-webpack-plugin@next")))),Object(r.b)("h3",{id:"mini-css-extract-plugin"},"mini-css-extract-plugin"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/webpack-contrib/mini-css-extract-plugin"},"Github")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"npm install --save-dev mini-css-extract-plugin\n")),Object(r.b)("h2",{id:"reference"},"Reference"))}l.isMDXComponent=!0}}]);