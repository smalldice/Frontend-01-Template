# JS Context (realm)
# 宏任务
# 微任务
# 函数调用 Execution context stack
# 语句/声明
# 表达式
# 直接量/变量/this ...

```
 i: 0    x: 1    y: 2 (Running Execution Context)

 -------------------->
```

```
  code evaluation state
                              realm
  Function
                              LexicalEnvironment
  Script or Module
                              VariableEnvironment
  Generator
```

LexicalEnvironment
```
this
new.target
super
variables
```

### VariableEnvironment
```js
//处理var声明

{
  let y = 2

  eval('var x = 1')
}


with({a: 1}) {
  eval('var x')
}

console.log(x)

```


### Environment Record
```js
var y = 2
function foo2() {
  console.log(y)
}
export foo2
```
closure
```
env record
y: 2

code: 
console.log(y)
```

```js
var y = 2
function foo2() {
  var z = 3;

  return () => {
    console.log(y, z)
  }
}

var foo3 = foo2()
export foo3
```

```
env record            env record
  z: 3         =>      y:2
  this

code 
console.log(y, z)
```

### realm
js中 函数表达式 和 直接量都会创建对象

隐式转换
```
var a = new Array()
var o = new Object()


```