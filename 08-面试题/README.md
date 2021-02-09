# 常见考点
- 预解析
  + 变量提升
    * var n = undefined
  + 函数参数给函数中同名变量赋值发生在变量提升之后
  + 函数提升
    * 会将同名变量覆盖，函数优先级最高
  + 优先级
    * 变量 < 参数 < 函数
- this
  + 没有调用者的函数中this指向window(浏览器运行)/global(node运行)
  + 在node中全局作用域不等同于global
  + 浏览器中全局作用域是window
- 作用域
  + 函数中未声明的变量会挂载到window(浏览器运行)/global(node运行)
  + 函数中找不到的变量会在window(浏览器运行)/global(node运行)中找
- 自执行函数
- 事件循环
- 等待队列
- 异步回调
- arguments
  + 内置对象，函数的参数数组对象
