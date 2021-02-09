/**
 * call(this: any, ...args: any[]): undefined
 * apply(this: any, arguments: any[]): undefined
 * bind(this: any): Function
 */
Function.prototype.myCall = function (ctx) {
  ctx = ctx || window || global
  ctx._fn = this
  let args = [...arguments].slice(1)
  let result = ctx._fn(args)
  delete ctx._fn
  return result
}
;
(function fun() {
  console.log(this)
}).myCall({a: 1})
