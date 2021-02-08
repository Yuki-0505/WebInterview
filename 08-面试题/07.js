function fun() {
  // 函数中未声明的变量会挂载到window
  b = 333
  // 函数中找不到的变量会在window中找
  console.log(a)
}
var a = 222
let obj = {a: 111}
fun.call(obj)
// > 222
console.log(b)
// > 333
