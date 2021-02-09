# @ermurray/Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ermurray31/lotide`

**Require it:**

`const _ = require('@ermurray31/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `_.tail(array)`: returns a new array with the first element removed.
* `_.head(array)`: returns the first element of the array
* `_.middle(array)`: returns the middle element of odd numbered array length, middle two if even array length and empty array if zero, one or two elements in array.