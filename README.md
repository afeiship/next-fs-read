# next-fs-read
> Read file with fs for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-fs-read
```

## usage
```js
import '@jswork/next-fs-read';

nx.fsRead('./__tests__/E201.lrc', { charset: 'utf8' });
/*
[00:02.00]Unit 1 Hello 第一单元 你好
[00:04.06]Hi, I'm Mocky. 嗨，我是Mocky。
[00:07.33]Hello, Mocky. 你好，Mocky。
[00:10.84]Learn to say. 学着说。（听力练习）

*/
```

## options
| name         | type   | default | description                         |
| ------------ | ------ | ------- | ----------------------------------- |
| charset      | string | utf-8   | Content charset.                    |
| responseType | string | string  | Results type(string/json/array). |

## license
Code released under [the MIT license](https://github.com/afeiship/next-fs-read/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-fs-read
[version-url]: https://npmjs.org/package/@jswork/next-fs-read

[license-image]: https://img.shields.io/npm/l/@jswork/next-fs-read
[license-url]: https://github.com/afeiship/next-fs-read/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-fs-read
[size-url]: https://github.com/afeiship/next-fs-read/blob/master/dist/next-fs-read.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-fs-read
[download-url]: https://www.npmjs.com/package/@jswork/next-fs-read
