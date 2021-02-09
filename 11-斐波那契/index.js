/**
 * 斐波那契数列
 * [1,1,2,3,5,8,13,21,34]
 */
// 纯递归
function fibonacci(n) {
  if (n < 0) return
  if (n <= 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(5))

// 数组 循环
function fibonacci(n) {
  const cache = [1, 1]
  if (n < 0) return
  for (let len = cache.length; len <= n; len++) {
    cache.push(cache[len - 1] + cache[len - 2])
  }
  return cache[n]
}
console.log(fibonacci(4))

// 数组 闭包 递归 按需增长数组
let fibonacci = (() => {
  const cache = [1, 1]
  return function fn(n) {
    if (n < 0) return
    if (n >= cache.length) {
      cache.push(fn(n - 1) + fn(n - 2))
    }
    return cache[n]
  }
})()
console.log(fibonacci(8))

// 数组 闭包 循环 按需增长数组
let fibonacci = (() => {
  const cache = [1, 1]
  return function fn(n) {
    if (n < 0) return
    for (let len = cache.length; len <= n; len++) {
      cache.push(cache[len - 1] + cache[len - 2])
    }
    return cache[n]
  }
})()
console.log(fibonacci(7))
