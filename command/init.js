'use strict'
const exec = require('child_process').exec
const co = require('co')
const path = require('path')
const chalk = require('chalk')
const prompt = require('co-prompt')
const download = require('download-git-repo');
const ora = require('ora')
var extend = require('extend');

const allTemplates = require('../templates.json');

module.exports = (tpl) => {
  co(function* () {
    // handle user input.
    // sure exist template name.
    if (!allTemplates[tpl]) {
      console.log(chalk.red('\n × Template dose not exit!'));
      console.log(` Use   ${chalk.green('dai ls ')}  view the list of available template\n`);
      exec();
      return
    }

    // download template
    let output = 'download-template';
    var result = allTemplates[tpl]
    
    const spinner = ora('begin generate template...')
    spinner.start()
      download(`${result.gitOwn}/${result.gitOwnProject}`, output, function (err) {
      spinner.stop()
      if (err) {
        console.log(chalk.red('  Generation failed with errors.\n'))
        return
      }
      console.log(chalk.green('\n √ Generation completed!'));
      console.log(chalk.green(`\n cd ${output} && npm install \n`));
    });
  });
}