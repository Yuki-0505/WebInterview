function fn1() {
  for (var i = 0; i < 4; i++) {
    var tc = setTimeout(function (i) {
      console.log(i)
      clearTimeout(tc)
    }, 1000, i)
  }
}

function fn2() {
  for (var i = 0; i < 4; i++) {
    // 第一次传入的tc为undefined
    var tc = setInterval(function (i, tc) {
      console.log(i)
      clearInterval(tc)
    }, 1000, i, tc)
  }
}

fn1()
// > 0 1 2
fn2()
// > 0 1 2 3 3 3 3...
