---
slug: 2020/08/23/knowledge
title: Fisher-Yates 演算法
author: Albert
author_title: Front End Engineer
author_url: https://github.com/Albertnotes
author_image_url: https://avatars.githubusercontent.com/u/57343359?s=460&u=196d3b133abafbd8294ac0cfb8713961291bb1a3&v=4
tags: [knowledge]
---

## 前言

紀錄當天開啟 30 Seconds of Knowledge 的知識

<!--truncate-->

## Fisher-Yates 演算法實作

概念為取最後一個元素和它前方的隨機元素交換位置，
接下來將倒數第二個元素，和它前方的隨機元素再交換位置，
以此類推......

### 範例

```jsx
const shuffle = ([...arr]) => {
	let m = arr.length;
	while (m) {
		const i = Math.floor(Math.random() * m--);
		[arr[m], arr[i]] = [arr[i], arr[m]];
	}
	return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```

### 解說

重點

解構賦值 (Destructuring assignment)

_不使用 arr 改為 [...arr] 避免直接改變函式傳入的陣列變數_

`[arr[m], arr[i]] = [arr[i], arr[m]]`

_變數交換，透過解構指派式進行陣列索引的替換_

`m--`

_算術運算子: 注意這個是遞減前回傳 m 值_

`--m`

_算術運算子: 注意這個與上面不同，是把 m 遞減後再回傳_

`Math.random()`

_產生 0 (包含 0 ) 和 1 (不包含 1) 之間的浮點型偽隨機數字_

以下是 `Math.floor(Math.random() * m--)` 的概念

```jsx
// 我們先試著這樣
// 例如產生: 0.99999999999
console.log(Math.random());
// 然後接上 m-- 在這邊 m 是遞減前回傳 m 值
// 所以 let m = arr.length; 會是 3
// 但是 0.99999999999 * 3 = 2.99999...
// 接著使用 Math.floor 回傳小於等於所給數字的最大整數
// 就會返回 2，但是這個會與當前 arr[m] 的最後一個索引值相同
// 所以照著以下的方式跑
const i = Math.floor(Math.random() * m--);
[arr[m], arr[i]] = [arr[i], arr[m]];
// 會有機率是 [arr[2], arr[2]] = [arr[2], arr[2]]
// 這個就不是交換位置的概念，所以可以把 m-- 改為 --m
// 最後把陣列回傳
return arr;
```

附上程式註解

```jsx
const shuffle = ([...arr]) => {
	let m = arr.length;
	while (m) {
		const i = Math.floor(Math.random() * --m);
		console.log('亂數:', i, '尾數', m);
		[arr[m], arr[i]] = [arr[i], arr[m]];
		console.log('已替換', arr);
	}
	return arr;
};

const foo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('亂數陣列:', shuffle(foo));
console.log('原始陣列:', foo);
```

![](https://i.imgur.com/UFvp4zc.png)

原始陣列

```
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

亂數: 8 尾數: 9，等於把陣列索引值 arr[9] 與 arr[8] 交換位置

```
[1, 2, 3, 4, 5, 6, 7, 8, 10, 9]
```

接著繼續跑 while

亂數: 5 尾數: 8，等於把陣列索引值 arr[8] 與 arr[5] 交換位置
取上次的結果

```
[1, 2, 3, 4, 5, 10, 7, 8, 6, 9]
```

接著繼續跑 while

亂數: 4 尾數: 7，等於把陣列索引值 arr[7] 與 arr[4] 交換位置
取上次的結果，再進行一次交換，以此類推達到亂數洗牌的效果...
