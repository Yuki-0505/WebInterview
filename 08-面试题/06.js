var n = 123
function f1() {
  console.log(n)
}
function f2() {
  var n = 456
  // 没有调用者的函数中this指向window
  f1()
}
f2()
console.log(n)
// > 123 123
