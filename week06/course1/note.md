# 有限状态机处理字符串

## 有限状态机
每一个状态都是一个机器
  1. 在每一个机器中、我们可以做计算、存储、输出。。。
  2. 所有的这些机器接受的输入是一致的
  3. 状态机的每一个机器本身没有状态， 乳沟我们用函数表示的话， 他应该是个纯函数

每一个状态及知道下一个状态:
  1. 每个机器都有确定的下一个状态（Moore）
  2. 每个机器根据输入决定下一个状态（Mealy）

### 在一个字符串中，找到字符a
```js
function isStr(str) {
  return typeof str === 'string'
}
```

```js
function findA (str) {
  if (!isStr(str)) return false

  const charList = str.split('')

  for(let i = 0;i < charList.length; i++) {
    if (charList[i] === 'a') return true
  }

  return false
}
```

### 在字符串中， 找到字符ab

```js
function findAB(str) {
  if (!isStr(str)) return false
  let foundA = false
  let foundB = false

  for(let char of str) {
    if (char === 'a') {
      foundA = true
    } else if(foundA && char ==='b') {
      return true
    } else {
      foundA = false
    }
  }
}
```

### 在字符串中， 找到abcdef
```js
function findABCD (str) {
  if (!isStr(str)) return false

  let foundA = false
  let foundB = false
  let foundC = false
  let foundD = false

  for(let char of str) {
    if (char === 'a') {
      foundA = true
    } else if(foundA && char === 'b') {
      foundB = true
    } else if(foundB && char === 'c') {
      foundC = true
    } else if(foundC && char === 'd') {
      return true
    } else {
      foundA = foundB = foundC = foundD = false
    }
  }

  return false
}
```

