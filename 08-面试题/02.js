;
(function () {
  // window.b = 3; var a = b
  var a = b = 3
})()
console.log(a)
// > 报错
console.log(b)
// > 3
