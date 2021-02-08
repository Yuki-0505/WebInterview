var a = 10

function test() {
  a = 100
  console.log(a)
  // 在浏览器中函数无调用者时this指向window
  console.log(this.a)
  // 变量提升，函数作用域
  var a
  console.log(a)
}
test()
