/**
 * 输出所有和为N的连续正整数序列
 * 例如：N = 15
 * [[1,2,3,4,5],[4,5,6],[7,8]]
 *
 * N = (n * 2 + len - 1) * len / 2
 * n = (N * 2 / len - len + 1) / 2
 * 0 = len*len + (n*2-1)*len - N*2
 * 当n === 0
 * 0 = len*len  - len - N*2
 * len = ((1 - 2 * n) + Math.sqrt(Math.pow(2 * n - 1) + 8 * N)) / 2
 * len = (1 + Math.sqrt(1 + 8 * N)) / 2
 */
function createArray(n, len) {
  const temp = []
  for (let i = n, end = n + len; i < end; i++) {
    temp.push(i)
  }
  return temp
}
function fn(N) {
  const result = []
  const maxLen = (1 + Math.sqrt(1 + 8 * N)) / 2
  for (let len = 2; len < maxLen; len++) {
    let n = (N * 2 / len - len + 1) / 2
    if (n === Math.floor(n)) {
      result.unshift(createArray(n, len))
    }
  }
  return result
}
console.log(fn(4))
console.log(fn(5))
console.log(fn(6))
console.log(fn(15))
