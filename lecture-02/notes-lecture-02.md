## Codealong - Notealong

# Topic of Lecture 02

- get node.js up and running in your IDE (Visual Studio Code) terminal
- split codealong code into modules/files and run them

# How we did this during Lecture 02

in your IDE (Visual Studio Code):

- navigate to your already set up folder or create a new folder
- you need to create an `index.js` file, this is the one you will run with node in the IDE terminal later
- code some working code, see complete files here: [lecture-02](https://github.com/EllyPirelly/wtmb-js-course-vol02/tree/master/lecture-02)
- `npm init`: creates the `package.json` file - watch out if you're in the correct folder while running that command!
- `npm install` "SomeRandomPackageFrom [npm](https://www.npmjs.com/)": adds the chosen npm package to the `package.json` and builds the `node_modules` folder - watch out if you're in the correct folder while running that command!
  - to have some general understanding how to import/require a package from [npm](https://www.npmjs.com/) and to use it in modules, we installed and required [chalk](https://www.npmjs.com/package/chalk), see files here how to code this: [lecture-02](https://github.com/EllyPirelly/wtmb-js-course-vol02/tree/master/lecture-02)
- check, if you saved all files (seriously, sometimes it's the reason why running node isn't working, speaking from own experience)
- run `node index.js` in your IDE terminal
- according to my files, some written parts in the terminal are now colored
- the `data.json` is created because of the `database.js`, see functionality there

## Assignment to have ready for Course 03

1. first of all: do NOT commit the `node_modules` folder!
2. break up the classes of your project into separate files/modules, require them, work with them
3. create a database.js, that saves and reads your project's data, that can hold your project's data
4. tip: you can have multiple databases to not overwrite persons with meetups etc

## Learning

- `.` = directory
- `/` = file in said directory
- don't forget to save files!

## To Do

- [ ] debugging - generally look into this and improve this over the course of the course
- [ ] watch VSC videos recommended by Micha!

      [episode 1](https://laracasts.com/series/visual-studio-code-for-php-developers/episodes/1)

      [episode 2](https://laracasts.com/series/visual-studio-code-for-php-developers/episodes/2)

      [episode 6](https://laracasts.com/series/visual-studio-code-for-php-developers/episodes/6)

      [episode 7](https://laracasts.com/series/visual-studio-code-for-php-developers/episodes/7)

      [episode 17](https://laracasts.com/series/visual-studio-code-for-php-developers/episodes/17)
