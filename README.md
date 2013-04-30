# object-replace
String.prototype.replace for Objects

## usage

Let's say we have some users:

    var data = [
      {name: 'joe', address: '123 Main Lane'},
      {name: 'cecilia', address: '456 Sticks St'},
      ...
    ]

Let's say we want to preform an in-place modification to some of these values - let's capitalize their names:

    var replace = require('object-replace')

    replace(data, 'name', function (val) {
      return val.toUpperCase()
    })

`object-replace` is also suitable (in fact, it really shines) for more complex and nested objects. It supports dotnotation selectors with wildcards, powered by [`object-match`](https://npmjs.org/package/object-match).

## function signature
In [jsig notation](https://github.com/jden/jsig):

    type Replacer : (val: Value, path: Array<String>) => Value

    replace(obj: Object, selectors: String|Array<String>, replacer:Replacer) => Object

Replace modifies the object `obj` in place, and also returns a reference to it for convenience.

The `replacer` function is called on each matching value. Its return value is used for the new property value.

## installation

    $ npm install object-replace

## running the tests

From probject root:

    $ npm install
    $ npm test

## contributors

jden <jason@denizac.org>

## license

MIT. (c) 2013 Agile Diagnosis <hello@agilediagnosis.com>. See LICENSE.md