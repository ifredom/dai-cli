# dai-cli
[![Build Status](https://api.travis-ci.org/tj/commander.js.svg?branch=master)](http://travis-ci.org/tj/commander.js)
[![NPM Version](http://img.shields.io/npm/v/commander.svg?style=flat)](https://www.npmjs.com/package/dai-cli)
[![NPM Downloads](https://img.shields.io/npm/dm/commander.svg?style=flat)](https://npmcharts.com/compare/dai-cli?minimal=true)
> 灵感来源于猴子“呆！”。用于快速生成完整，规范，优化后的项目结构，主要有 vue单页，react, node-express, node-koa, python-django, python分布式爬虫
## Quick Start

```js
  $ npm install -g dai-cli
```
## Option parsing


```js
 $ ./examples/dai --help

   Usage: dai [options]

   An application for pizzas ordering

   Options:

     -i, --help           output usage information
     -v, --version        output the version number
     -ls, --list          output List of available templates
```
## Version option

Calling the `version` implicitly adds the `-v` and `--version` options to the command.

    $ ./examples/dai list
    vue
    node-express


## License

MIT
