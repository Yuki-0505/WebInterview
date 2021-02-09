function A() {
  console.log(1)
}
function Func() {
  A = function () {
    console.log(2)
  }
  return this
}
Func.A = A
Func.prototype = {
  A:() => {
    console.log(3)
  }
}

A()
// > 1
Func.A()
// > 1
Func().A()
// 2
new Func.A()
// > 1
new Func().A()
// > 3
new new Func().A()
// > error
// 箭头函数无法被new
