/**
 * obj == str | obj => obj.toString()
 * null == undefined > true
 * NaN == NaN > false
 * 其余都是转换为数字
 */

/**
 * 对象转换为数字
 * Number(obj.toString())
 */
[10] == 10
// > true

// var x = {
//   a: 0,
//   // 方式一
//   toString() {
//     return ++this.a
//   },

//   // 方式二
//   valueOf() {
//     return ++this.a
//   }
// }
// 方式三 数据劫持
var x = {}
var a = 0
Object.defineProperty(window, 'x', {
  get() {
    return ++a
  }
})


if(x == 1 && x == 2 && x == 3) {
  console.log(1)
}
