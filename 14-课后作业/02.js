var x = 2
var y = {
  x: 3,
  z: (function (x) {
    this.x *= x
    x += 2
    return function (n) {
      this.x *= n
      x += 3
      console.log(x)
    }
  })(x)
}
// window.x y.x z.x
// 2 3 2
// 4 3 4
var m = y.z
m(4)
// 16 3 7
// > 7
y.z(5)
// 16 15 10
// > 10
console.log(x, y.x)
// > 16 15
