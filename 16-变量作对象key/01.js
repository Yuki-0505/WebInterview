/**
 * 对象key会转化为string
 */
// example 1
let a = {}, b = '0', c = 0
a[b] = 'aaa'
a[c] = 'bbb'
console.log(a[b])
// > 'bbb'

// example 2
let a = {}, b = Symbol('1'), c = Symbol('1')
a[b] = 'aaa'
a[c] = 'bbb'
console.log(a[b])
// > 'aaa'

// example 3
let a = {}, b = {n: '1'}, c = {m: '2'}
a[b] = 'aaa'
a[c] = 'bbb'
console.log(a[b])
// 'bbb'
console.log(b.toString())
// > [object Object]
console.log(b.toString() === c.toString())
// > true

