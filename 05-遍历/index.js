/**
 * Map
 */
let map = new Map()
map.set('name', 'miss').set('age', 18)
console.log(map)
for (let [key, value] of map) {
  console.log(key, value)
}
map.forEach((value, key, instance) => console.log(value, key, instance))

console.log('-------------')
/**
 * Set
 */
let set = new Set()
set.add(2).add(22).add(7).add(9)
console.log(set)
for (let value of set) {
  console.log(value)
}
set.forEach((value, key, instance) => console.log(value, key, instance))

console.log('-------------')
/**
 * Array
 */
let arr = [1, 2, 3, 5, 6, 9, 6, 4]
for(let index in arr) {
  console.log(arr[index])
}
for(let value of arr) {
  console.log(value)
}
arr.forEach((value, index, instance) => console.log(value, index, instance))

console.log('-------------')
/**
 * Object
 */
let obj = {
  name: 'miss',
  age: 18,
  gender: 0
}
for(let key in obj) {
  console.log(key, obj[key])
}
