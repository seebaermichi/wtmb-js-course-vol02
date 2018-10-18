// see chalk here: https://www.npmjs.com/package/chalk

const chalk = require('chalk')

module.exports = class Meetup {
  constructor(name, location) {
    this.name = name
    this.location = location
    this.attendees = []
  }

  report() {
    console.log(
      this.name,
      chalk.red.bgWhite.bold('meetup is held at'),
      this.location,
      chalk.magenta.bold('and number of attendees are'),
      this.attendees.length
    )
  }
}
