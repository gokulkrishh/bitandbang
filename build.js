'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.green(' Gokulakrishnan Kalaikovan'),
  handle: chalk.white('gokulkrishh'),
  work: chalk.blueBright('Web Developer at ThoughtWorks'),
  twitter: chalk.underline.magenta('https://twitter.com/') + chalk.underline.magenta('gokul_i'),
  npm: chalk.underline.magenta('https://npmjs.com/') + chalk.underline.magenta('~gokulkrishh'),
  github: chalk.underline.magenta('https://github.com/') + chalk.underline.magenta('gokulkrishh'),
  web: chalk.underline.magenta('https://gokul.site'),
  dribble: chalk.underline.magenta('https://dribbble.com/gokulkrishh'),
  npx: chalk.yellow('npx') + ' ' + chalk.yellow('gokulkrishh'),
  labelWork: chalk.white.bold('     Work:'),
  labelTwitter: chalk.white.bold('  Twitter:'),
  labelnpm: chalk.white.bold('      npm:'),
  labelGitHub: chalk.white.bold('   GitHub:'),
  labelWeb: chalk.white.bold('     Blog:'),
  labelDribble: chalk.white.bold('  Dribble:'),
  labelCard: chalk.white.bold('     Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} `
const working = `${data.labelWork}  ${data.work} `
const twittering = `${data.labelTwitter}  ${data.twitter} `
const githubing = `${data.labelGitHub}  ${data.github} `
const webing = `${data.labelWeb}  ${data.web} `
const carding = `${data.labelCard}  ${data.npx} `

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  newline +
  webing +
  newline +
  twittering +
  newline + // data.labelnpm + data.npm
  githubing +
  newline +
  newline +
  carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
