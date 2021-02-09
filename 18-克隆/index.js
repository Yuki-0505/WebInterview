function deepClone(obj) {
  if (obj === null) return null
  if (typeof obj !== 'object') return obj
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }
  if (obj instanceof Date) {
    return new Date(obj)
  }

  let newObj = new obj.constructor
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}

let obj = {
  a: 100,
  b: [10, 20, 30],
  c: {
    x: 10
  },
  d: /^\d+$/g,
  e: function () {}
}

let obj2 = deepClone(obj)
console.log(obj2)
console.log(obj2 === obj)
console.log(obj2.c === obj.c)
