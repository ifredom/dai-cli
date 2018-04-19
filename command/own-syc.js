'use strict';
var inquirer = require('inquirer');
const chalk = require('chalk');
const download = require('download-git-repo');

const config = require('../templates');

module.exports = () => {
  // const answers = inquirer.prompt([{ type: 'confirm', name: 'OK', message: 'Are you OK?', default: false }]).then(answers => {
  //   console.log(answers);
  // });
  download('ifredom/ta-generator', 'generator-vue', function(err) {
    console.log(err ? 'Error' : 'Success');
  });
};

// https://segmentfault.com/a/1190000013091099
