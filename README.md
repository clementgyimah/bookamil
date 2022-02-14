# Bookamil
### https://bookamil.herokuapp.com

[![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://typescriptlang.org)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)](https://github.com/Naereen/badges/)
[![Documentation Status](https://readthedocs.org/projects/ansicolortags/badge/?version=latest)](http://ansicolortags.readthedocs.io/?badge=latest)
[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)

## I. Installation

#### 1. Clone this repository

```
$ git clone https://github.com/clementgyimah/bookamil.git
$ cd bookamil
```

#### 2. Install dependencies
Make sure you have npm installed globally before this step.

If yarn is not installed
```
$ npm install --global yarn
```
now run
```
$ yarn
```

## II. Development
#### 1. Start the Metro
Make sure you are in the project directory and run the following command

```
$ yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## III Testing

Run all tests
```
$ yarn test
```

NB: update snapshots if you have modified code after your last test.

Run command below to update snapshots
```
$ yarn update-test
```

Run all tests with coverage
```
$ yarn test-coverage
```

## IV Release

```
$ yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!




## IV Eject

```
$ yarn eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
