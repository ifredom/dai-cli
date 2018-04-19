# ta-cli
[![Build Status](https://api.travis-ci.org/tj/commander.js.svg?branch=master)](http://travis-ci.org/tj/commander.js)
[![NPM Version](http://img.shields.io/npm/v/commander.svg?style=flat)](https://www.npmjs.org/package/commander)
[![NPM Downloads](https://img.shields.io/npm/dm/commander.svg?style=flat)](https://npmcharts.com/compare/commander?minimal=true)
## Installation

```js
  $ npm install -g ta-cli
```
## Version option

Calling the `version` implicitly adds the `-v` and `--version` options to the command.

    $ ./examples/ta -v
    0.0.1

## Option parsing


```js
 $ ./examples/ta --help

   Usage: ta [options]

   An application for pizzas ordering

   Options:

     -i, --help           output usage information
     -v, --version        output the version number
     -ls, --list          output List of available templates
```

## License

MIT