/**
 * 防抖
 * 触发事件n秒内执行回调函数
 * 期间再次触发则重新开始计算n秒
 */
// 延迟执行
function debounce(callback, wait) {
  let timeout
  // 闭包，timeout不会被销毁
  return function() {
    if(timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(function() {
      // this是setTimeout的调用对象
      callback.call(this)
    }, wait)
  }
}
// 立即执行
// function debounce(callback, wait) {
//   let timeout
//   // 闭包，timeout不会被销毁
//   return function() {
//     if(timeout) {
//       clearTimeout(timeout)
//     } else {
//       callback.call(this)
//     }
//     timeout = setTimeout(function() {
//       timeout = null
//     }, wait)
//   }
// }

/**
 * 节流
 * 连续发生的事件至少相隔n秒
 * 即具有冷却时间
 */
// function throttle(callback, wait) {
//   let timeout
//   return function () {
//     if(!timeout) {
//       timeout = setTimeout(function() {
//         timeout = null
//         callback.call(this)
//       }, wait)
//     }
//   }
// }
// 时间戳方式
function throttle(callback, wait) {
  let prev = 0
  return function () {
    let now = Date.now()
    if(now - prev > wait) {
      prev = now
      callback.call(this)
    }
  }
}
