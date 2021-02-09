/**
 * setTimeout/ajax是宏任务
 * await/resolve/reject是微任务
 * 主任务 => 微任务 => 宏任务
 */
async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
  setTimeout(function() {
    console.log('setTimeout2')
  }, 0)
  return
}
console.log('script start')
setTimeout(function() {
  console.log('setTimeout1')
}, 0)
async1()
new Promise(function(resolve) {
  console.log('promise1')
  resolve()
}).then(function() {
  console.log('promise2')
})
console.log('script end')
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout1
// setTimeout2
