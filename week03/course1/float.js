function check(zero) {
  if (1 / zero === Infinity) {
    return 1
  }

  if (1 / zero === -Infinity) {
    return -1
  }

  return null
}

function sign(number) {
  return number / Math.abs(number)
}

console.log(check(0))
console.log(check(-0))
