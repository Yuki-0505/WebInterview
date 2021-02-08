;
(function d(num) {
  console.log(num)
  var num = 10
})(100)
// > 100

;
(function e(num) {
  console.log(num)
  var num = 10

  function num() {}
})(100)
// > Function: num
