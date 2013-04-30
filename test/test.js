var chai = require('chai')
chai.should()

var replace = require('../index')

describe('replace', function () {
  it('is analogous to String#replace in an object graph', function () {

    var obj = {
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 4
      }
    }

    replace(obj, 'b', function (val) {
      return val * 2
    })

    obj.b.should.equal(4)

  })
  it('returns the object', function () {
    var obj = {
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 4
      }
    }

    replace(obj, 'b', function (val) {
      return val
    })
    .should.deep.equal({
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 4
      }
    })
  })
  it('accepts dotnotation with wildcards', function () {
    var obj = {
      a: 1,
      b: 2,
      c: {
        d: {
          f: 4
        },
        e: {
          f: 3
        }
      }
    }

    replace(obj, 'c.*.f', function (val) {
      return val * 2
    })

    obj.c.d.f.should.equal(8)
    obj.c.e.f.should.equal(6)

  })
})