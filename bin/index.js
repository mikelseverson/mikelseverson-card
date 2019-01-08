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
  chatbot: chalk.cyan('https://mikel.ai/'),
  npx: chalk.white('npx @mikelseverson/card'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  chatbotLabel: chalk.white.bold('   Chatbot:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const head = `${data.name} ${data.handle}`
const work = `${data.labelWork}  ${data.work}`
const twitter = `${data.labelTwitter}  ${data.twitter}`
const github = `${data.labelGitHub}  ${data.github}`
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`
const web = `${data.labelWeb}  ${data.web}`
const chatbot = `${data.chatbotLabel}  ${data.chatbot}`
const card = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const cardContent =
      head +
      newline +
      newline +
      work +
      newline +
      twitter +
      newline +
      github +
      newline +
      linkedin +
      newline +
      web +
      newline +
      chatbot +
      newline +
      newline +
      card

const output = chalk.green(boxen(cardContent, options))

console.log(output)
