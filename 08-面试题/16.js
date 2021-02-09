var R = (function() {
  var u = {a: 1, b: 2}
  var r = {
    fn: function(k) {
      return u[k]
    }
  }
  return r
})()
console.log(R.fn('a'))
// > 1
