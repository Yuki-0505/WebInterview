let arr = [
  [1, 2, 3],
  [4, 5, 6, 7, 8],
  [9, [10, [11, [12]]]]
]
/**
 * flat(Infinity)
 */
console.log(arr.flat(Infinity))

/**
 * toString split map Number
 */
console.log(arr.toString().split(',').map(item => Number(item)))

/**
 * JSON.stringify() replace split map Number
 */
console.log(JSON.stringify(arr).replace(/(\[|\])/g, '').split(',').map(item => Number(item)))

/**
 * some
 */
let arr1 = [
  [1, 2, 3],
  [4, 5, 6, 7, 8],
  [9, [10, [11, [12]]]]
]
while (arr1.some(item => Array.isArray(item))) {
  arr1 = [].concat(...arr1)
}
console.log(arr1)

/**
 * 递归
 */
Array.prototype.myFlat = function() {
  let result = []
  function fn(arr) {
    for(let item of arr) {
      if(Array.isArray(item)) {
        fn(item)
      } else {
        result.push(item)
      }
    }
  }
  fn(this)
  return result
}
console.log(arr.myFlat())

Array.prototype.myFlat2 = function() {
  function fn(arr) {
    let result = []
    for(let item of arr) {
      if(Array.isArray(item)) {
        result.push(...fn(item))
      } else {
        result.push(item)
      }
    }
    return result
  }
  return fn(this)
}
console.log(arr.myFlat2())
