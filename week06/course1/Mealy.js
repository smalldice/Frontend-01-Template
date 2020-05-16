// 每个函数就是一个状态
// function state(input) { // 函数参数就是输入
//   return next; // 返回下一个状态
// }

function isStr(str) {
  return typeof str === 'string'
}

function matchABCDE(str) {
  if (!isStr(str)) return false

  let state = start

  for(let c of str) {
    state = state(c)
  }

  return state === end
}

function start (char) {
  if (char === 'a') {
    return foundA
  } else {
    return start
  }
}

// 陷阱状态 进入之后不会进入别的状态
function end(char) {
  return end;
}

function foundA(char) {
  if (char === 'b') {
    return foundB
  } else {
    return start(char)
  }
}

function foundB(char) {
  if (char === 'c') {
    return foundC
  } else {
    return start(char)
  }
}

function foundC(char) {
  if (char === 'd') {
    return foundD
  } else {
    return start(char)
  }
}

function foundD(char) {
  if (char === 'e') {
    return end
  } else {
    return start(char)
  }
}

function end(char) {
  return end
}

console.log(matchABCDE('aabcdef'))