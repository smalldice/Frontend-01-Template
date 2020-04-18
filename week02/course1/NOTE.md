## 编程语言通识

产生式（BNF）

用尖括号扩起来的名称来表示语法结构名

语法结构分成基础结构和需要用其他语法结构定义的复合结构
<ul>
  <li>基础结构称终结符</li>
  <li>复合结构称非终结符</li>
</ul>


0 ?::=?
1 ?<A>? ::= ?<B>?
2 <A>::=?
3 <A>::=<A>? zheng que
  <A>::=?<A> ❌

其他产生式
EBNF ABNF Customized

Example:
  Ecma 262
    AdditiveExpression:
      MultiplicativeExpression
      AdditiveExpression + MultiplicativeExpression
      AdditiveExpression - MultiplicativeExpression


图灵完备性
  命令式 - 图灵机： 可计算的一定会被计算出来
    goto
    if 和 while

  声明式 - lambda （lambda演算）
    递归

动态与静态
  动态
    在用户设备、服务器上
    产品实际运行
    Runtime
  
  静态
    在程序员的设备上  
    产品开发时
    CompileTime

类型系统
  动态类型系统(Runtime的类型) 和 静态类型系统(TS)
  强类型与弱类型
    String + Number
    String == Boolean

  复合类型
    结构体 { a: T1, b: T2 }
    函数签名（T1, T2） => T3

  子类型
    逆变  Array<Child> -> Array<Parent>
    协变  Array<Parent> -> Array<Child>

一般命令式编程语言

Atom
  Identifier
  Literal

Expression
  Atom
  Operator
  Punctuator

Statement
  Expression
  Keyword
  Punctuator

Structure
  Function
  Class
  Process
  Namespace
  ...

Program
  Program
  Module
  Package
  Library

