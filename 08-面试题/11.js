function b() {
  console.log(a)
  // > Function
  var a = 10

  function a() {}
  a = 100
  console.log(a)
  // > 100
}
b()
