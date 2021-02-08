// 变量提升 var fun = undefined
// 赋值 fun = function(){}
function fun() {
  console.log(fun)
  fun = 456
  console.log(fun)
}
fun(fun)
var fun
