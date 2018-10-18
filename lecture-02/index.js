/*
node.js - how to run it in the terminal of your IDE:
- code some working code
- run node index.js in your IDE terminal

- following code isn't "cleaned up" on purpose,
to reproduce steps taken during Lecture 02
*/

const person = require('./person')
const meetup = require('./meetup')
const chalk = require('chalk')
const database = require('./database')

console.log('hello world')

const add = (num1, num2) => num1 + num2
const additionResult = add(3, 4)
console.log(additionResult)

const multiply = (num1, num2) => num1 * num2
const multiplyResult = multiply(4, 6)
console.log(multiplyResult)

const mert = new person('Mert', 33)
const arman = new person('Arman', 35)
console.log(mert, arman)

const wtmb = new meetup('Women TechMakers Berin', 'Eurostaff')
console.log(wtmb)
console.log(chalk.red(wtmb)) // [object Object]

arman.attend(wtmb)
mert.attend(wtmb)
wtmb.report()

database.save(wtmb)
const loadedFile = database.load()
console.log(loadedFile.attendees)

console.log(wtmb.attendees)

console.log(chalk.blue.bold('Hello world!'))
console.log(chalk.yellow.bgGreen.bold(arman.name))
