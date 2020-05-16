function isStr (str) {
  return typeof str === 'string'
}

function match (str) {
  if (!isStr(str)) return false

  let state = start

  for (let c of str) {
    state = state(c)
  }

  return state === end
}

function start(c) {
  if (c === 'a') {
    return foundA
  } else {
    return start
  }
}

function end(c) {
  return end
}

function foundA (c) {
  if (c === 'b') {
    return foundB
  } else {
    return start(c)
  }
}

function foundB(c) {
  if (c === 'c') {
    return foundA1
  } else {
    return start(c)
  }
}

function foundA1(c) {
  if (c === 'a') {
    return foundB1
  } else {
    return start(c)
  }
}

function foundB1(c) {
  if (c === 'b') {
    return foundX
  } else {
    return start(c)
  }
}

function foundX(c) {
  if (c === 'x') {
    return end
  } else {
    return foundA1(c)
  }
}

console.log(match('cabcab1'))