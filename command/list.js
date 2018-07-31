var extend = require('extend');
var chalk = require('chalk');
const allTemplates = require('../templates.json');

module.exports = () => {
  Object.keys(allTemplates).forEach(function (tpl) {
    var tplInfo = allTemplates[tpl];
    console.log(chalk.yellow(` ${tpl} `), chalk.green(` (${tplInfo.branch})`));
  });
}