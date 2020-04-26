// Number to String
function convertNumberToString(val) {
  if (isNaN(val)) return val.valueOf()
}

// String to Number
function convertStringToNumber(val, x) {
  if (typeof val === 'number') return val
  if (typeof val !== 'string') return NaN
  if (isNaN(x) || x === null) x = 10

  var chars = val.split('')
  var number = 0
  var i = 0

  while (i < chars.length && chars[i] !== '.') {
    number = number * x
    number += chars[i].codePointAt(0) - '0'.codePointAt(0)
    i++
  }

  if (chars[i] === '.') {
    console.log(chars[i])
    i++
  }

  var fraction = 1

  while (i < chars.length) {
    fraction = fraction / x
    fraction += chars[i].codePointAt(0) - '0'.codePointAt(0)
    i++
  }

  return number + fraction
}

console.log(convertStringToNumber('100.0122', 2))
