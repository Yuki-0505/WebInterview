setTimeout(() => {
  console.log(1)
}, 20)
console.log(2)
setTimeout(() => {
  console.log(3)
}, 30)
console.log(4)
console.time('AA')
for(let i = 0; i< 90000000; i++) {

}
console.timeEnd('AA')
console.log(5)
setTimeout(() => {
  console.log(6)
}, 8)
console.log(7)
setTimeout(() => {
  console.log(8)
}, 15)
console.log(9)
// > 2 4 AA:80 5 7 9 1 3 6 8
