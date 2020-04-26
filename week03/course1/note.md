float 问题解答代码： https://jsfiddle.net/pLh8qeor/19/

### Grammar

Tree vs Priority

1 + 2 \* 3

Tree: +
1 \*
2 3

### Expressions

#### left Handside

a.b = c
a+b = c

##### Member

a.b

a[b]

foo`string`

super.b

super['b']

new.target

new Fool()

##### New

new Foo

new a()()

new new a()

##### call

foo()
super()
foo()['b']
foo().b
foo()`abc`

```js
function a() {
  this.b = 1
}

new a()['b']
```

##### Reference

```js
class Reference {
  constructor(object, property) {
    this.object = object
    this.property = property
  }
}
```

Object delete
Key assign

##### update

```js
var a = 0
a++
++a
a--
--a
```

##### Unary

```js
delete a.b;
void foo();
typeof a;
+a;
-a;
!a;
~a;
await a;
<<;
>>;
instanceof;
in;
&;
^;
|;
```

#### right handSide

#### boxing & unboxing (Number String Symbol Boolean)

```js
const a = {
  [Symbol.toPrimitive]() {
    return {}
  },
  valueOf() {
    return {}
  },
  toString() {
    return '111'
  },
}
```
