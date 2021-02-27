let arr = [1, 2, 3]
let str = '1-2-3-4'

// 连接
console.log(arr.join('-'))
// 分割
console.log(str.split('-'))
// 切片
console.log(arr.slice(1, -1))
// 替换
console.log(str.replace(/-/g, `,`))
// 重复
console.log('abc'.repeat(3))
// 拼接
console.log(arr.splice(1, 2, 3, 4, 5))
console.log(arr)
// 追加、弹出
console.log(arr.push(6), arr)
console.log(arr.pop(), arr)
// 头部追加、弹出
console.log(arr.unshift(0), arr)
console.log(arr.shift(), arr)
