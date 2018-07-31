'use strict';
const co = require('co');
const prompt = require('co-prompt');
const chalk = require('chalk');
const fs = require('fs');
const templates = require('../templates');

module.exports = () => {
  co(function*() {
    let tplName = yield prompt('  Template name: ');
    let gitUserName = yield prompt('  Git UserName: ');
    let gitOwnProject = yield prompt('  Git User Project: ');
    const branch = 'master';

    // 避免重复添加
    if (!templates[tplName]) {
      templates[tplName] = {};
      templates[tplName]['gitUserName'] = gitUserName;
      templates[tplName]['gitOwnProject'] = gitOwnProject;
      templates[tplName]['gitOwn'] = branch;
      console.log(chalk.red('  Template has being created!'));
      console.log(chalk.green('  Use `dai ls` to view.'));
    } else {
      console.log(chalk.red('  Template has already existed!'));
      process.exit();
    }

    // 把模板信息写入templates.json
    fs.writeFile(__dirname + '/../templates.json', JSON.stringify(templates), 'utf-8', err => {
      if (err) console.log(err);
      console.log(chalk.green('  New template added!\n'));
      console.log(chalk.grey('  The last template list is: \n'));
      console.log(templates);
      console.log('\n');
      process.exit();
    });
  });
};
