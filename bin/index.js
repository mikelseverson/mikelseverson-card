#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'single'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Mikel Severson /'),
  handle: chalk.cyan('mikelseverson'),
  work: chalk.white('Software Engineer II at RAZR'),
  twitter: chalk.cyan('https://twitter.com/mikelseverson'),
  github: chalk.cyan('https://github.com/mikelseverson'),
  linkedin: chalk.cyan('https://linkedin.com/in/mikelseverson'),
  web: chalk.cyan('https://mikelseverson.com/'),
  npx: chalk.white('npx @mikelseverson/card'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const cardContent =
      heading +
      newline +
      newline +
      working +
      newline +
      twittering +
      newline +
      githubing +
      newline +
      linkedining +
      newline +
      webing +
      newline +
      newline +
      carding

const output = chalk.green(boxen(cardContent, options))

console.log(output)
