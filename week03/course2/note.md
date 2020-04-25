# 简单语句

ExpresionStatement

```js
var a = 1 + 2
```

EmptyStatement

```js
```

DebuggerStatement

```js
debugger
```

ThrowStatement

```js
throw new Error()
```

ContinueStatement

```js
continue label1
```

BreakStatement

```js
break label
```

ReturnStatement

```js
return
```

# 复合语句

BlockStatement
support: [[normal]]

```js
{
  // 非normal 执行结束
  const a = 1
  throw 1
  const b = 2
  console.log(b)
}
```

LabelledStatement

```js
function p() {
  public: this.a = 1
  this.b = 2
  private: this.c = 3
  this.d = 4
}

const a = new p()
a.a // 1
a.b // 2
a.c // undefined
a.d // undefined
```

IterationStatement

```js
while
do while
for(;;;)
for(a in b)
for(c of d) // 用于遍历 iteratorable 的对下岗
for await
```

# declaration

Function
Generator
AsyncFunction
AsyncGenerator
Variable
Class
Lexical

# ObjectApi/Grammar

{}, [] Object.definedProperty

Object.create \ Object.setPrototypeOf \ Object.getPrototypeOf

new \ class \ extends

new \ function \ prototype
