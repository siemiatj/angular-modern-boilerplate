# Deprecation warning

This repository is deprecated. It should still work but packages won't be updated by me anymore.

## What & why ?
Have you ever found yourself in need of a basic Angular boilerplate, with Webpack and Babel already set-up ? Ready to write and run Karma unit tests ? No BS stupid app, generators, bower ? Well, here you go.

## Old vs New
Depending on what you need, there are two versions of this project available :

### Old

`Old` version includes:

* Grunt
* ES5
* Webpack
* Bootstrap
* Angular-Bootstrap
* Karma
* ESlint
* JShint

This version now lives in `master-old` [branch](https://github.com/siemiatj/angular-modern-boilerplate/tree/master-old)

### New

Another more `edge` version set up to use all the cool stuff:

* Gulp
* ES6
* Webpack
* BabelJS
* Sass
* Angular-Material
* Karma
* ESlint


## Setup 
You need node with npm and `grunt-cli` installed. Then run:

`grunt build`

to build the application.

## Tests
This app comes with Karma preconfigured. In order for it to pick up your test cases just suffix them with `spec.js`.
Then run:

`gulp test`

## ES6
Webpack is configured to compile files live. To use ES6 sugar suffix your scripts with `es6`.

## Use
This setup does not have a development server. In order to see your code running just load `app/index.html` in your browser.

## What next
This is a dowhatyouwantwithit project. Feel free to submit PR's.

Sample project built using (old version of) this boilerplate : https://github.com/siemiatj/simple-angular-app
