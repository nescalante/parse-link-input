# parse-link-input [![Greenkeeper badge](https://badges.greenkeeper.io/nescalante/parse-link-input.svg)](https://greenkeeper.io/)

Parses a link input from a markdown source and separates it in href and title

## Install

```shell
npm install parse-link-input
```

## Usage

```js
const parseLinkInput = require('parse-link-input');
parseLinkInput('foo "bar"'); // { href: 'http://foo', title: 'bar' }
```

## License

MIT
