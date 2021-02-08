var length = 100
function f1() {
  console.log(this.length)
}
var obj = {
  x: 10,
  f2: function(f1) {
    f1()
    // f1() this指向arguments对象
    arguments[0]()
  }
}
obj.f2(f1, 1, 2)
// > 100 3
