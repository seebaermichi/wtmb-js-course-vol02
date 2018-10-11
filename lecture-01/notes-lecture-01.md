## Codealong

```javascript
var Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.meetups = [];
  }

  attend(meetup) {
    this.meetups.push(meetup);
    meetup.attendees.push(this);
  }
};

var Meetup = class {
  constructor(name) {
    this.name = name;
    this.attendees = [];
  }
};

var wtmb = new Meetup("Women TechMakers Berlin");
var anna = new Person("Anna", 35);
var armagan = new Person("Armagan", 34);

anna.attend(wtmb);
armagan.attend(wtmb);

console.log(anna);
console.log(armagan);
```

## Assignment for next Course

1. Create a GitHub account
2. Come up with an own project idea (to then iterate on throughout the whole course and maybe presented during Graduation Event)
3. Create at least 3 different classes/objects for said own project and
4. Create at least 2 different interactions between said classes/objects.

## Other notes, to have in mind for upcoming courses

install

- [x] Chrome Browser
- [x] Slack
- [ ] Follow up if courses are on YouTube
- [x] Node.js
- [x] Visual Studio Code as your IDE in case you don't have one already
- [ ] MongoDB

during the course a meetup application will be created, with, for example people and events and their properties

## Learning

- `.this` = reference to self
- use single quotes (again, brevity)
- the use of Snippets inside of the Console! (I've only worked within the Console until today, find Snippets under Console/Sources/Snippets)

## To Do for better understanding

- [ ] research more "Semicolon - yes or no" - now it's no (brevity)
- [ ] research Constructor
- [ ] research .this
