musync-backend-grooveshark
--------------------------

[![npm version](https://badge.fury.io/js/musync-backend-grooveshark.svg)](http://badge.fury.io/js/musync-backend-grooveshark)
[![dependencies](https://david-dm.org/resin-io/musync-backend-grooveshark.png)](https://david-dm.org/resin-io/musync-backend-grooveshark.png)
[![Build Status](https://travis-ci.org/resin-io/musync-backend-grooveshark.svg?branch=master)](https://travis-ci.org/resin-io/musync-backend-grooveshark)

[MuSync](https://github.com/resin-io/musync) Grooveshark backend.

Installation
------------

Install `musync-backend-grooveshark` by running:

```sh
$ npm install --save musync-backend-grooveshark
```

Refer to [MuSync](https://github.com/resin-io/musync) documentation to learn how to integrate the backend to your MuSync application.

Documentation
-------------

### grooveshark.search(Object song, Function callback)

A function that takes a song object, and returns an audio stream.

- `song` is an object containing an `artist` and `title`.
- `callback` is a function called with either an error or an audio readable stream.

Tests
-----

Run the test suite by doing:

```sh
$ gulp test
```

Contribute
----------

- Issue Tracker: [github.com/resin-io/musync-backend-grooveshark/issues](https://github.com/resin-io/musync-backend-grooveshark/issues)
- Source Code: [github.com/resin-io/musync-backend-grooveshark](https://github.com/resin-io/musync-backend-grooveshark)

Before submitting a PR, please make sure that you include tests, and that [coffeelint](http://www.coffeelint.org/) runs without any warning:

```sh
$ gulp lint
```

Support
-------

If you're having any problem, please [raise an issue](https://github.com/resin-io/musync-backend-grooveshark/issues/new) on GitHub.

License
-------

The project is licensed under the MIT license.
