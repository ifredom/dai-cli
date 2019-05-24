# dai-cli

[![Build Status](https://api.travis-ci.org/tj/commander.js.svg?branch=master)](http://travis-ci.org/tj/commander.js)
[![NPM Version](http://img.shields.io/npm/v/commander.svg?style=flat)](https://www.npmjs.com/package/dai-cli)
[![NPM Downloads](https://img.shields.io/npm/dm/commander.svg?style=flat)](https://npmcharts.com/compare/dai-cli?minimal=true)
> “呆！”。灵感来源于猴子。平时开始时，一旦项目比较多，每一次都要重新使用vue-cli生成全新项目，然后修改其结构。dai 正是用于快速生成企业级完整，规范，优化后的项目结构。可用项目模板有 template-pc-elementui, template-mobile-vant, template-pc-nuxt, template-react, template-node-express, template-node-koa, template-python-django, template-python-crawler

## Quick Start (开始使用)

```js
  // Install (安装)
  $ npm install -g dai-cli
  // View available templates (查看可用模板)
  $ dai ls
  // Download (下载)
  $ dai init template-mobile-vant
```

## Option parsing (可用参数)

```js
// Help(帮助)
$ dai --help
===========================================
  Usage: dai [options]

  An application for pizzas ordering

  Options:

    -i, --help           output usage information
    -v, --version        output the version number
    -ls, --list          output List of available templates
===========================================

// View available templates (查看可用的模板)
$ dai list
===========================================
    template-pc-elementui
    template-mobile-vant
    node-express
===========================================
```

## License

MIT
