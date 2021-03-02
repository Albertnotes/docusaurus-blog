---
slug: 2020/08/24/knowledge
title: 填充字串符、閉包
author: Albert
author_title: Front End Engineer
author_url: https://github.com/Albertnotes
author_image_url: https://avatars.githubusercontent.com/u/57343359?s=460&u=196d3b133abafbd8294ac0cfb8713961291bb1a3&v=4
tags: [knowledge]
---

## 前言

紀錄當天開啟 30 Seconds of Knowledge 的知識

<!--truncate-->

## 判斷字串符數量低於指定長度，則自動填充字串於兩側

### 範例

```jsx
const pad = (str, length, char = ' ') =>
	str.padStart((str.length + length) / 2, char).padEnd(length, char);

pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```

### 解說

[padStart 文件](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)  
[padEnd 文件](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)

```jsx
str.padStart((str.length + length) / 2, char);
// 第一個參數是 targetLength 目標字串被填充後的長度，
// 如果此參數小於原字串的長度，那將直接返回原字串。
// 用來填充的字串，從左側開始填充
// return 新字串

str.padEnd(length, char);
// 第一個參數是 targetLength 目標字串被填充後的長度，
// 如果此參數小於原字串的長度，那將直接返回原字串。
// 用來填充的字串，從右側開始填充
// return 新字串
```

```jsx
const pad = (str, length, char = ' ') =>
	// (原始長度 + 期望長度) / 2 計算字串符左側需要，填充的長度
	str
		.padStart((str.length + length) / 2, char)
		// 由 padStart return 的值，跑 padEnd，直接是否達到判斷期望長度，再補齊右側長度
		.padEnd(length, char);
```

## 閉包

### 範例

```jsx
const call = (key, ...args) => (context) => context[key](...args);

Promise.resolve([1, 2, 3])
	.then(call('map', (x) => 2 * x))
	.then(console.log); // [ 2, 4, 6 ]
const map = call.bind(null, 'map');
Promise.resolve([1, 2, 3])
	.then(map((x) => 2 * x))
	.then(console.log); // [ 2, 4, 6 ]
```

### 解說

[MDN 文件](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Closures)

首先來看 call

```jsx
const call = (key, ...args) => (context) => context[key](...args);

// 拆成以下的方式，就會發現這是運用閉包的函式工廠 return 會保存 key, ...args 變數

function callB(key, ...args) {
  return (context) => {
    context[key](...args));
  };
}

// 以下則是呼叫函式會 return (context) => context['map']((x)=> 2 * x));

call('map', (x) => 2 * x)
```

從上述的解析帶回範例統整一下

```jsx
const call = (key, ...args) => (context) => context[key](...args);

Promise.resolve([1, 2, 3])

	// resolve.then(() => ...)
	.then(call('map', (x) => 2 * x))
	// 所以會變成 .then((context) => context['map']((x)=> 2 * x)))
	// 回傳的值會帶入下一個 .then 接收參數
	.then(console.log); // [ 2, 4, 6 ]

// 這個則是使用 bind ，綁定函式第一個參數為 map
const map = call.bind(null, 'map');

Promise.resolve([1, 2, 3])
	// 呼叫時就可以省略，只傳入 ..args 參數
	.then(map((x) => 2 * x))
	// 回傳的值會帶入下一個 .then 接收參數
	.then(console.log); // [ 2, 4, 6 ]
```
