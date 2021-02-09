let arr = [
  [1,2,3],
  [4,5,6,7,8],
  [9,[10,[11,[12]]]]
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
  [1,2,3],
  [4,5,6,7,8],
  [9,[10,[11,[12]]]]
]
while(arr1.some(item => Array.isArray(item))) {
  arr1 = arr1.concat(...arr1)
}
console.log(arr1)
