---
slug: 2020/09/04/knowledge
title: 物件合併
author: Albert
author_title: Front End Engineer
author_url: https://github.com/Albertnotes
author_image_url: https://avatars.githubusercontent.com/u/57343359?s=460&u=196d3b133abafbd8294ac0cfb8713961291bb1a3&v=4
tags: [knowledge]
---

## 30s\_ OF knowledge 介紹

flip
Flip takes a function as an argument, then makes the first argument the last.

<!--truncate-->

Return a closure that takes variadic inputs, and splices the last argument to make it the first argument before applying the rest.

一樣就是利用閉包的方式做處理。

> 似乎 30s_knowledge 很多例子都是閉包 0.0

```jsx
const flip = (fn) => (first, ...rest) => fn(...rest, first);
let a = { name: 'John Smith' };
let b = { price: 25 };
let s = { price: 30 };
const mergeFrom = flip(Object.assign);
let mergePerson = mergeFrom.bind(null, a);
console.log(mergePerson(b), b, a);
console.log(mergePerson(s), s, a);
a.name = 'Albert';
console.log(b, a);
// 註解 Object.assign 非深層複製會改變來源物件(b 及 s)，則目標物件不會有影響(a)
```
