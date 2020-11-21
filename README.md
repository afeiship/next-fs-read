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

nx.fsRead('./__tests__/E201.lrc', { charset: 'gbk' });
// [00:00.800]--- lesson 1  A private conversation 私锟斤拷谈锟斤拷
```

## options
| name         | type   | default | description      |
| ------------ | ------ | ------- | ---------------- |
| charset      | string | utf-8   | Content charset. |
| responseType | string | string  | Results type.    |

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
