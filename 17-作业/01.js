/**
 * alert() 弹出的是字符串
 */
var test = (function(i) {
  return function() {
    alert(i *= 2)
  }
})(2)
test(5)
// > '4'
