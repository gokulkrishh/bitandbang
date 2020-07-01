'use strict';

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

// Text + chalk definitions
const data = {
  name: chalk.white('Gokulakrishnan Kalaikovan'),
  handle: chalk.white('gokulkrishh'),
  work: chalk.white('Web Dev @ Thoughtworks'),
  twitter: chalk.cyan('https://twitter.com/') + chalk.cyan('gokul_i'),
  npm: chalk.cyan('https://npmjs.com/') + chalk.red('~gokulkrishh'),
  github: chalk.cyan('https://github.com/') + chalk.green('gokulkrishh'),
  web: chalk.cyan('https://gokul.site'),
  dribble: chalk.cyan('https://dribbble.com/gokulkrishh'),
  npx: chalk.red('npx') + ' ' + chalk.white('gokulkrishh'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelWeb: chalk.white.bold('       Blog:'),
  labelDribble: chalk.white.bold('    Dribble:'),
  labelCard: chalk.white.bold('       Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const webing = `${data.labelWeb}  ${data.web}`;
const dribble = `${data.labelDribble}  ${data.dribble}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  newline + // data.labelOpenSource + data.opensource
  twittering +
  newline + // data.labelTwitter + data.twitter
  npming +
  newline + // data.labelnpm + data.npm
  githubing +
  newline +
  dribble +
  newline +
  webing +
  newline +
  newline +
  carding; // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)));
