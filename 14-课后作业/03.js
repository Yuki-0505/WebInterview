var x = 0, y = 1
function fn() {
  x += 2
  fn = function(y) {
    console.log(y + (--x))
  }
  console.log(x, y)
}
fn(3)
// > 2 1
fn(4)
// > 5
console.log(x, y)
// > 1 1
