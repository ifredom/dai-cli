'use strict';
const co = require('co');
const prompt = require('co-prompt');
const templates = require('../templates');
const chalk = require('chalk');
const fs = require('fs');

module.exports = () => {
  co(function*() {
    let tplName = yield prompt('Template name: ');
    let gitUrl = yield prompt('Git UserName: ');
    let branch = yield prompt('Branch: ');

    // 避免重复添加
    if (!templates[tplName]) {
      templates[tplName] = {};
      templates[tplName]['branch'] = branch;
      templates[tplName]['gitUrl'] = gitUrl.replace(/[\u0000-\u0019]/g, ''); // 过滤unicode字符
    } else {
      console.log(chalk.red('Template has already existed!'));
      process.exit();
    }

    // 把模板信息写入templates.json
    fs.writeFile(__dirname + '/../templates.json', JSON.stringify(templates), 'utf-8', err => {
      if (err) console.log(err);
      console.log(chalk.green('New template added!\n'));
      console.log(chalk.grey('The last template list is: \n'));
      console.log(templates);
      console.log('\n');
      process.exit();
    });
  });
};
