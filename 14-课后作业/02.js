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

var m = y.z
m(4)
// > 7
y.z(5)
// > 10
console.log(x, y.x)
// > 16 15
// window.x 2 4 16
// y.x      3       15
// z x        4 7   10
