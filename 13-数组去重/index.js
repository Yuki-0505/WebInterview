let ary = [11, 22, 44, 22, 55, 22, 66, 22, 44, 22, 55]

/**
 * Set
 */
console.log([...new Set(ary)])

/**
 * indexOf push
 */
;
(function(ary) {
  const temp = []
  for(let item of ary) {
    if(temp.indexOf(item) < 0) {
      temp.push(item)
    }
  }
  console.log(temp)
})(ary)

/**
 * indexOf slice filter
 */
console.log(ary.filter((value, index, array) => array.slice(index + 1).indexOf(value) < 0))

/**
 * indexOf slice
 */
;
(function(ary) {
  let len = ary.length;
  for(let i = 0; i < len - 1; ) {
    if(ary.slice(i + 1, len).indexOf(ary[i]) >= 0) {
      len--
      ary[i] = ary[len]
      continue
    }
    i++
  }
  console.log(ary.slice(0, len))
})([11, 22, 44, 22, 55, 22, 66, 22, 44, 22, 55])
