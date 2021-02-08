function fun(n) {
  // 预解析
  // 变量提升 var n = undefined
  // 函数参数会给n赋值
  console.log(n)
  // > 123
  var n = 456
  console.log(n)
  // > 456
}
var n = 123
fun(n)
