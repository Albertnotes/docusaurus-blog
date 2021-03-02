---
slug: 2020/08/22/knowledge
title: 數字累加器
author: Albert
author_title: Front End Engineer
author_url: https://github.com/Albertnotes
author_image_url: https://avatars.githubusercontent.com/u/57343359?s=460&u=196d3b133abafbd8294ac0cfb8713961291bb1a3&v=4
tags: [knowledge]
---

## 前言

紀錄當天開啟 30 Seconds of Knowledge 的知識

<!--truncate-->

## 數字累加器(支援複數以上)

### 範例

```javascript
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```

### 解說

```jsx
...arr  // 採用函式的其餘參數，函式內會是以陣列接收。
[...arr] // 其餘參數的陣列透過解構為一個新陣列
```

跑 [reduce 累加器](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

```jsx
reduce((acc, val) => acc + val, 0);
// acc 是 accumulator 上一次呼叫累加的總數值
// val 是 currentValue 當前要累加的數值
// 後面傳入 0 為 initialValue 累加器初始值
```
