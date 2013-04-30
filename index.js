var match = require('object-match')

// replace(obj: Object, selectors: String|Array<String>, replacer:Replacer) => Object
// Replacer : (val: Value) => Value
function replace(obj, selectors, replacer) {

  match(selectors, obj).forEach(function (match) {
    match.parent[match.key] = replacer(match.value, match.path)
  })

  return obj
}

module.exports = replace