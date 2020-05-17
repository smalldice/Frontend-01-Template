// 完成abababx的处理
// 可选 如何处理完全位置的pattern
// 参考kmp算法 mention: 生成状态

// 作业1
function isStr (str) {
  return typeof str === 'string'
}

;(
  function () {
    function match (str) {
      if (!isStr(str)) return false

      var state = start
      for (let c of str) {
        state = state(c)
      }

      return state === end
    }

    function start(c) {
      if (c === 'a') {
        return foundB
      } else {
        return start
      }
    }

    function foundB(c) {
      if (c === 'b') {
        return foundA1
      } else {
        return start(c)
      }
    }

    function foundA1 (c) {
      if (c === 'a') {
        return foundB1
      } else {
        return start(c)
      }
    }

    function foundB1 (c) {
      if (c === 'b') {
        return foundA2
      } else {
        return start(c)
      }
    }


    function foundA2 (c) {
      if (c === 'a') {
        return foundB2
      } else {
        return start(c)
      }
    }

    function foundB2 (c) {
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
        return start(c)
      }
    }

    function end (c) {
      return end
    }

    console.log(match('abababx')) // true
    console.log(match('aabababx')) // true
    console.log(match('abcabx')) // false
    console.log(match('abababxx')) // true
    console.log(match('abababax')) // false
  }
)();

// 2. 挑战题

// function formatTarget(str) {
//   const functionName = []
//   str.split('').forEach(char => {
//     if (functionName.find)
//   })
// }

