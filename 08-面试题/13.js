function m() {
  console.log(a1)
  console.log(a2)
  console.log(b1)
  console.log(b2)
  // if中函数和变量存在预解析声明
  if (false) {
    function b1() {}
    var a1 = 100
  }
  if (true) {
    function b2() {}
    var a2 = 10
  }
  console.log(a1)
  console.log(a2)
  console.log(b1)
  console.log(b2)
}
m()
// undefined
// undefined
// undefined
// undefined
// undefined
// 10
// undefined
// [Function: b2]
