## Codealong

```javascript
var Person = class {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.meetups = []
  }

  attend(meetup) {
    this.meetups.push(meetup)
    meetup.attendees.push(this)
  }
}

var Meetup = class {
  constructor(name) {
    this.name = name
    this.attendees = []
  }
}

var wtmb = new Meetup("Women TechMakers Berlin")
var anna = new Person("Anna", 35)
var armagan = new Person("Armagan", 34)

anna.attend(wtmb)
armagan.attend(wtmb)

console.log(anna)
console.log(armagan)
```

## Assignment to have ready for Course 02

1. Create a GitHub account
2. Come up with an own project idea (to then iterate on throughout the whole course and maybe presented during Graduation Event)
3. Create at least 3 different classes/objects for said own project and
4. Create at least 2 different interactions between said classes/objects.

## Other notes

install

- [x] Chrome Browser
- [x] Slack
- [x] Follow up if courses are on YouTube
- [x] Node.js
- [x] Visual Studio Code as your IDE in case you don't have one already
- [x] [MongoDB, see here](https://www.mongodb.com/download-center?initial=true#atlas)
- [x] [Docker, see here](https://store.docker.com/editions/community/docker-ce-desktop-mac)

during the course a meetup application will be created, with, for example people and events and their properties

## Learning

- `.this` = reference to self
- use single quotes (again, brevity)
- the use of Snippets inside of the Console! (I've only worked within the Console until today, find Snippets under Console/Sources/Snippets)

## To Do for better understanding

- [x] research more "Semicolon - yes or no" - now it's NO (? brevity but errorprone, especially if you as a beginner don't know the edge cases?)
  - [read about the cases here](https://hackernoon.com/sup-with-those-damn-semicolons-in-js-bcd9ebe83eb0)
  - [also interesting](https://flaviocopes.com/javascript-automatic-semicolon-insertion/)
- [x] [research class, constructor and .this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)

  ```javascript
  class Polygon {
    constructor(height, width) {
      this.area = height * width
    }
  }
  console.log(new Polygon(4, 3).area)
  ```

- [x] research arrow function

```javascript
// normal function
function sayHi(greeting) {
  return greeting
}
sayHi("Hola!")
// arrow function
var sayHi = greeting => greeting
sayHi("Hola")
```
