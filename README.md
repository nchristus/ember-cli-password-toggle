# ember-cli-password-toggle

[![Build Status][]](https://travis-ci.org/nchristus/ember-cli-password-toggle)
[![NPM Downlaads](https://img.shields.io/npm/dm/ember-cli-password-toggle.svg)](https://www.npmjs.org/package/ember-cli-password-toggle)

## Description
Ember-cli-password-toggle is an ember component that provides an easy way to show and hide a password via a toggle button.

## Installation
```
# install via npm
$ npm install ember-cli-password-toggle --save-dev
```

## Password Toggle

```
{{password-toggle password=model.password}}
```

Optionally you set:
 - custom classes
  - wrapperClass
  - buttonClass
  - inputClass
 - inputId
 - focus=true

```
{{password-toggle password=model.password inputId="input-id" wrapperClass="outerDivClass" buttonClass="buttonCustomClass" inputClass="inputCustomClass" focus=true}}
```

## Running the unit tests

    npm install
    bower install
    ember test

## License

Copyright © 2015 Nick Christus

Licensed under the MIT License


[Build Status]: https://secure.travis-ci.org/nchristus/ember-cli-password-toggle.png?branch=master
