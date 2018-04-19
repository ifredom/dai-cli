'use strict';
const co = require('co');
const coPrompt = require('co-prompt');
const chalk = require('chalk');
const { prompt } = require('inquirer');
const fs = require('fs');
const templates = require('../templates');

module.exports = () => {
  co(function*() {
    let tplName = yield coPrompt('  Will delete template\'s name: ');

    if (templates[tplName]) {
      delete templates[tplName];
    } else {
      console.log(chalk.red('  Templates does not exist!'));
      process.exit();
    }

    const question = [
      {
        name: 'yes',
        message: `Are you confirm delete ${tplName}?`,
        type: 'confirm',
        default: false
      }
    ];
    prompt(question).then(answers => {

      if (answers.yes) {
        fs.writeFile(__dirname + '/../templates.json', JSON.stringify(templates), 'utf-8', err => {
          if (err) console.log(err);
          console.log('\n');
          console.log(chalk.green('  Templates deleted!\n'));
          console.log(chalk.grey('  The last templates list is: \n'));
          console.log(templates);
          console.log('\n');
          process.exit();
        });
      } else {
        process.exit();
      }
    });
  });
};
