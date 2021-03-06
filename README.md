# README #

This test project uses ES6 with webpack bundler. Supporting ESLint & Code Coverage.

## Prerequisites
* Node.js
* Node Package Manager

## Structure:

```
project
│   .eslintrc.json      // ESLint rules
│   .gitignore          // Git ignore
│   karma-test-shim.js  // Karma file to define specs files
│   karma.conf.js       // Karma task runner configuration
│   package-lock.json   // NPM package caching
│   package.json        // NPM packages
│   README.md           // Document
│
└───src
│   │   app.js          // Main file
│   |   app.spec.js     // Unit test for app.js
|
```

## Installation
Install NodeJS packages:
```
npm install
```

## Testing

```
npm test
```

ESLint will be processed before excuting test cases.

Code coverage report will be generated in folder coverage.