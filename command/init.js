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


module.exports = (templateName) => {
  co(function* () {
    // handle user input.
    // sure exist template name.
    if (!allTemplates[templateName]) {
      console.log(chalk.red('\n × Template dose not exit!'));
      console.log(` Use   ${chalk.green('dai ls ')}   view the list of available template\n`);
      errExit();
    }

    // download template
    let gitOwner = 'ifredom';
    let templateOutFile = '';
    let gitOwnerProjectName = '';

    if (templateName === 'vue') {
      gitOwnerProjectName = 'generator-template';
      templateOutFile = 'template-vue';
    }
    if (templateName === 'node-express') {
      gitOwnerProjectName = 'node-blog';
      templateOutFile = 'template-node-express';
    }
    const spinner = ora('begin generate template...')
    spinner.start()
      download(`${gitOwner}/${gitOwnerProjectName}`, templateOutFile, function (err) {
      spinner.stop()
      if (err) {
        console.log(chalk.red('  Generation failed with errors.\n'))
      }
      console.log(chalk.green('\n √ Generation completed!'));
      console.log(chalk.green(`\n cd ta-generator && npm install \n`));
    });
  });
}